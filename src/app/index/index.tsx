import { View, TouchableOpacity, Text, Modal, Alert, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useCallback, useState } from "react"
import { router, useFocusEffect } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Languages } from "@/components/languages"
import { LanguagesList } from "@/utils/languages"
import { Words } from "@/components/words"
import { Option } from "@/components/option"
import { WordStorage } from "@/storage/word-storage"


export default function Index () {

    const [language, setLanguage] = useState(LanguagesList[0].name)
    const [showModal, setShowModal] = useState(false)
    const [word, setWord] = useState<WordStorage>({} as WordStorage)
    const [words, setWords] = useState<WordStorage[]>([])

    async function getWords() {
        try {
            const response = await WordStorage.get()

            const filtered = response.filter((word) => word.language === language)

            setWords(filtered)

        } catch (error) {
            Alert.alert("Erro", "Erro ao listar as palavras")
            console.log(error)
        }
    }

    const handleDetails = (selected: WordStorage) => {
        setShowModal(true)
        setWord(selected)
    }


    useFocusEffect(
        useCallback(() => {
            getWords()
        
        }, [language])
    )
    


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="language" size={42} color={colors.blue[400]} />
                <Text>Dicionário</Text>

                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.blue[400]} />
                </TouchableOpacity>
            </View>

                <Languages
                    selected={language}
                    onChange={setLanguage}
                />

                <FlatList 
                    data={words}
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
                                <Text style={styles.modalLanguage}>Inglês</Text>

                                <TouchableOpacity onPress={() => setShowModal(false)}>
                                    <MaterialIcons
                                        name="close"
                                        size={24}
                                        color={colors.gray[300]}
                                    />
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.modalTranslate}>
                                <Text style={styles.modalWord}>Palavra</Text>
                                <MaterialIcons name="translate" size={24} color={colors.gray[200]} />
                                <Text style={styles.modalWord}>Tradução</Text>
                            </View>

                            <Text style={styles.modalExemple}>
                                Exemplo: "Hello" é traduzido para "Olá" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum dignissimos ut adipisci veritatis inventore exercitationem illo reprehenderit possimus cupiditate! Et maxime quo iure, qui dolor quibusdam? Sit, molestiae optio.
                            </Text>

                            <View style={styles.modalFooter}>
                               <Option name="Deletar" icon="delete" variant="secondary" />
                               <Option name="Editar" icon="language"   />

                            </View>
                            
                        </View>
                    </View>
                    
                </Modal>


                     

        </View>
    )
    
}