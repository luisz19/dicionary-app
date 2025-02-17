import { View, TouchableOpacity, Text, Modal, Alert, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useCallback, useEffect, useState } from "react"
import { router, useFocusEffect } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Languages } from "@/components/languages"
import { LanguagesList } from "@/utils/languages"
import { Words } from "@/components/words"
import { Option } from "@/components/option"
import { WordStorage } from "@/storage/word-storage"
import { Input } from "@/components/inputs"


export default function Index () {

    const [language, setLanguage] = useState(LanguagesList[0].name)
    const [showModal, setShowModal] = useState(false)
    const [word, setWord] = useState<WordStorage>({} as WordStorage) //alem de armazenar como variavel, armazena com as propriedades do type
    const [filteredWords, setFilteredWords] = useState<WordStorage[]>([])
    const [id, setId] = useState('')
    const [words, setWords] = useState<WordStorage[]>([])
    const [search, setSearch] = useState("")

    async function getWords() {
        try {
            const response = await WordStorage.get()

            const filtered = response.filter((word) => word.language === language)

            setWords(filtered)

            setFilteredWords(filtered)

        } catch (error) {
            Alert.alert("Erro", "Erro ao listar as palavras")
            console.log(error)
        }
    }

    const handleSearch = (text: string) => {
        setSearch(text)

        const results = words.filter((item) => 
            item.word.toLowerCase().includes(text.toLowerCase()) ||
            item.translate.toLowerCase().includes(text.toLowerCase()) ||
            (item.example && item.example.toLowerCase().includes(text.toLowerCase()))
        )

        setFilteredWords(results) // Atualiza os resultados filtrados
    }

    async function deleteWords() {
        try {
            await WordStorage.remove(word.id)
            getWords()
            setShowModal(false)

        } catch(error) {
            Alert.alert("Erro", "Não foi possível deletar a palavra")
            console.log(error)
        }
    }

    const handleRemove = () => {
        Alert.alert("Excluir", "Deseja realmente excluir?", [
            { style: "cancel", text: "Não" },
            { text : "Sim", onPress: deleteWords }
        ])

    }

    const handleUpdate = () => {
        router.navigate({pathname: "/add",
            params: {
              isUpdate: "true",
              id: id,
            }})
    }

    const handleDetails = (selected: WordStorage) => {
        setShowModal(true)
        setWord(selected)
        setId(selected.id)
    }


    useFocusEffect(
        useCallback(() => {
            getWords()
            setShowModal(false)
        
        }, [language])
    )
    


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="language" size={42} color={colors.blue[400]} />
                <Input 
                    placeholder="Pesquisar" 
                    style={styles.input} 
                    value={search}
                    onChangeText={handleSearch}/>
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.blue[400]} />
                </TouchableOpacity>
            </View>

                <Languages
                    selected={language}
                    onChange={setLanguage}
                />

                <FlatList 
                    data={filteredWords}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                        <Words 
                            word={item.word}
                            translation={item.translate}
                            onDetails={() => handleDetails(item)}
                        />
                    
                    }    
                    
                />

                <Modal  animationType="slide" transparent visible={showModal}>
                    <View style={styles.modal}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalLanguage}>{word.language}</Text>

                                <TouchableOpacity onPress={() => setShowModal(false)}>
                                    <MaterialIcons
                                        name="close"
                                        size={24}
                                        color={colors.gray[300]}
                                    />
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.modalTranslate}>
                                <Text style={styles.modalWord}>{word.word}{}</Text>
                                <MaterialIcons name="translate" size={24} color={colors.gray[200]} />
                                <Text style={styles.modalWord}>{word.translate}</Text>
                            </View>

                            <Text style={styles.modalExemple}>
                                {word.example}
                            </Text>

                            <Text style={styles.modalDate}>{word.date}</Text>

                            <View style={styles.modalFooter}>
                               <Option name="Deletar" icon="delete" variant="secondary" onPress={handleRemove}/>
                               <Option name="Editar" icon="edit" onPress={handleUpdate} />

                            </View>
                            
                        </View>
                    </View>
                    
                </Modal>


                     

        </View>
    )
    
}