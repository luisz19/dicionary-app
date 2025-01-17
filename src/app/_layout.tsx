import { Stack } from "expo-router"
import { colors } from "@/styles/colors"


export default function Layout() {

    const backgroundColor = colors.gray[950]

    return(
        <Stack 
            screenOptions={{
                headerShown: false, // define o cabeçalho como falso
                contentStyle: { backgroundColor }// Define cor do Background do app
            }} 
        />
    ) 
}