import { View, Text, TouchableOpacity, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useEffect, useState } from "react"

import { style } from "./style"
import { colors } from "@/styles/colors"

import { Languages } from "@/components/languages"
import { Input } from "@/components/inputs"
import { Button } from "@/components/button"
import { WordStorage } from "@/storage/word-storage"
import { useSearchParams } from "expo-router/build/hooks"

export default function Add () {

    const [language, setLanguage] = useState("")
    const [word, setWord] = useState("")
    const [translate, setTranslate] = useState("")
    const [example, setExample] = useState("")
    const searchParams = useSearchParams()

    const isUpdate = searchParams.get("isUpdate") === "true";
    const id = searchParams.get("id")
    

    async function handleAdd() {
        try{
            if(!word.trim()) {
                return Alert.alert("Palavra", "Digite uma palavra") 
             }
            if(!language) {
                return Alert.alert("Língua", "Escolha uma língua") 
            }
            if(!translate.trim()) {
                return Alert.alert("Tradução", "Digite a tradução") 
            }
     
            await WordStorage.save({
                id: new Date().getTime().toString(),
                word,
                translate,
                example,
                language
            })

           

            Alert.alert(
                "Sucesso", "Nova palavra adicionada",
                [
                    {
                        text: "Ok",
                        onPress: () => router.back()    
                    }
                
                ])
            } catch (error) {
                console.log(error)
                Alert.alert("Erro", "Não foi possível salvar")
            }

        
    }

    async function handleUpdate() {
        try {

            if(!word.trim()) {
                return Alert.alert("Palavra", "Digite uma palavra") 
             }
            if(!language) {
                return Alert.alert("Língua", "Escolha uma língua") 
            }
            if(!translate.trim()) {
                return Alert.alert("Tradução", "Digite a tradução") 
            }

            if (!id) {
                return Alert.alert("Erro", "ID inválido para atualização.");
            }

            await WordStorage.update({
                id: id,
                word,
                translate,
                example,
                language
            })

            Alert.alert(
                "Sucesso", "Palavra atualizada",
                [
                    {
                        text: "Ok",
                        onPress: () => router.back()    
                    }
                
            ])

            
        } catch(error) {
            throw error
        }
    }

    

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.gray[300]} />
                </TouchableOpacity>
                <Text style={style.title}>{isUpdate ?  "Atualizar palavra" : "Nova Palavra"}</Text>
            </View>
            <Languages 
                selected={language}
                onChange={setLanguage}
            />

            <View style={style.inputs}>
                <Input 
                    placeholder="Digite a palavra"
                    onChangeText={setWord}    
                />

                <View style={{flexDirection: "row", gap: 20}}>
                    <MaterialIcons name="arrow-upward" size={24} color={colors.gray[200]} />
                    <MaterialIcons name='translate' size={24} color={colors.gray[300]} />
                    <MaterialIcons name="arrow-downward" size={24} color={colors.gray[200]} />
                </View>

                <Input 
                    placeholder="Digite a tradução"
                    onChangeText={setTranslate}    
                />
                <Input 
                    placeholder="Exemplo"
                    onChangeText={setExample}
                />
                <Button title="Adicionar" onPress={ isUpdate?  handleUpdate : handleAdd } />
            </View>
            

            
        </View>
    )
}