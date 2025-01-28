import AsyncStorage from "@react-native-async-storage/async-storage"

const WORDS_STORAGE_KEY = "words-storage"

export type WordStorage = {
    id: string
    word: string
    translate: string
    example: string
    language: string
}

async function get(): Promise<WordStorage[]> {
    const storage = await AsyncStorage.getItem(WORDS_STORAGE_KEY)
    const response = storage ? JSON.parse(storage) : []

    return response
}

async function save(newWord: WordStorage) {
    try {
        const storage = await get()
        const updated = JSON.stringify([...storage, newWord])

        await AsyncStorage.setItem(WORDS_STORAGE_KEY, updated)
    } catch(error) {
        throw error
    }
}

async function update(updateWord: WordStorage) {
    try {
        const storage = await get()
        const updatedStorage = storage.map((word: WordStorage) =>
            word.id === updateWord.id ? updateWord : word
        )
        await AsyncStorage.setItem(WORDS_STORAGE_KEY, JSON.stringify(updatedStorage))
    } catch (error) {
        throw error
    }
}

async function remove(id: string) {
    try {
        const storage = await get()
        const updated = storage.filter((link) => link.id !== id)

        await AsyncStorage.setItem(WORDS_STORAGE_KEY, JSON.stringify(updated))
    } catch (error) {
        throw error
    }
    
}

export const WordStorage = { get, save, remove, update }