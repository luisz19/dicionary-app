import { FlatList } from "react-native";

import { LanguagesList } from "@/utils/languages";
import { Language } from "../language";
import { styles } from "./styles";

type Props = {
    selected: string
    onChange: (category: string) => void
}

export function Languages({ selected, onChange }: Props) {
    return (
        <FlatList
            data={LanguagesList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Language
                    name={item.name}
                    icon={item.icon}
                    isSelected={item.name === selected}
                    onPress={() => onChange(item.name)}
                />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        
        />
    )
} 