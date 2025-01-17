import { FlatList } from "react-native";

import { LanguagesList } from "@/utils/languages";
import { Language } from "../language";
import { styles } from "./styles";

export function Languages() {
    return (
        <FlatList
            data={LanguagesList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Language
                    name={item.name}
                    icon={item.icon}
                />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        
        />
    )
} 