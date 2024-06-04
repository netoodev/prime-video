import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png"
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";

export const Home = () => {
    return  (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText} >Kids</Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false} style={{width: "100%"}} >
                <TouchableOpacity style={styles.movieImageThumbnail}>
                    <Image style={styles.movieImage} source={MovieTheWheel} />
                </TouchableOpacity>

                <Text style={styles.movieText} >Continue Watching</Text>
                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <MoviesCard movieURL={item.moviesURL}/>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText} >Crime Movies</Text>
                <FlatList 
                    data={MOVIESCRIME}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <MoviesCard movieURL={item.moviesURL}/>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText} >Watch in your language</Text>
                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <MoviesCard movieURL={item.moviesURL}/>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 4,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff",
        padding: 20,
    },

    movieText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "700",
        padding: 15,
    },

    movieImageThumbnail: {
        width: "100%",
        alignItems: "center",
    }, 
    movieImage: {
        width: "100%"   
    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },
});