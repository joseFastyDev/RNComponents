import React, { useState, useContext } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderTitle } from "../components/HeaderTitle";
import { ThemeContext } from "../context/themeContext/ThemeContext";
import { styles } from "../theme/appTheme";

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
    const { theme: { colors, dividerColor, dark }} = useContext( ThemeContext );

    const [ refreshing, setRefreshing] = useState(false);
    const [ data, setData ] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola mundo');
        }, 3500);
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor={ dividerColor }
                    colors={ [ colors.text ]}
                    style={{ backgroundColor: '#5856D6'}}
                    tintColor={ dark ? 'white' : 'black' }
                    // title="Refreshing"
                    // titleColor="white"
                />
            }
        >
            <View style={ styles.globalMargin }>
                <HeaderTitle title="Pull to refresh" />

                {
                    data && <HeaderTitle title={ data } />
                }

            </View>
        </ScrollView>
    )
}