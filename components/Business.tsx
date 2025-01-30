import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const Business = () => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          style={styles.arrow}
          source={require("@/assets/fonts/images/backlogo.jpg")}
        />
      </View>
      <View>
        <Image
          style={styles.share}
          source={require("@/assets/fonts/images/shareit.jpg.png")}
        />
      </View>
      <View>
        <Image
          style={styles.car}
          source={require("@/assets/fonts/images/carlogo.jpg")}
        />

        <Image
          style={styles.minicar}
          source={require("@/assets/fonts/images/logo1.jpg")}
        />
        <Image
          style={styles.minicar1}
          source={require("@/assets/fonts/images/minicar1.jpg")}
        />
        <Image
          style={styles.logo2}
          source={require("@/assets/fonts/images/logo2.jpg")}
        />

        <Text style={styles.text}>TESLA MODEL#3</Text>
        <Text style={styles.rate}>4.5/5</Text>
        <Text style={styles.price}>RS. 18,00,00000,00</Text>

        <View style={styles.para}>
          <Text style={styles.lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            illo, cumque sed neque dignissimos aspernatur minus. Quia vitae
            culpa iure? Veniam quidem amet velit voluptatem eligendi sapiente
            ducimus laborum optio.
          </Text>
        </View>
        <View style={styles.center}>
          <Pressable>
            <Text style={styles.pilot}>Autopilot</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.pilotone}>360 camera</Text>
          </Pressable>
          <Text style={styles.see}>SEE ALL</Text>
        </View>
        <View style={styles.all}>
          <View>
            <View style={styles.first}>
              <Image
                style={styles.shakeone}
                source={require("@/assets/fonts/images/shakeone.jpg.png")}
              />
              <Text style={styles.textOne}>Contact Dealer</Text>
            </View>
            <View style={styles.first}>
              <Image
                style={styles.shakeone}
                source={require("@/assets/fonts/images/details.png")}
              />
              <Text style={styles.textOne}>Car Deatails(Modal, year, ...)</Text>
            </View>
          </View>
          <View>
            <View style={styles.first}>
              <Image
                style={styles.shakeone}
                source={require("@/assets/fonts/images/location.png")}
              />
              <Text style={styles.textOne}>Delhi India</Text>
            </View>
            <View style={styles.first}>
              <Image
                style={styles.shakeone}
                source={require("@/assets/fonts/images/loan2.png")}
              />
              <Text style={styles.textOne}>EMI/Loan</Text>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Pressable>
            <Text style={styles.buy}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({
  arrow: {
    width: 25,
    height: 25,
    marginTop: 60,
    marginLeft: 15,
  },
  buy: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  first: {
    flexDirection: "row",
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 30,
    bottom: "16%",
  },
  share: {
    width: 25,
    height: 25,

    alignSelf: "flex-end",
    marginTop: -20,
    marginRight: 15,
  },
  all: {
    flexDirection: "row",
    bottom: 80,
    // marginLeft: 20,
    justifyContent: "space-around",
  },
  car: {
    objectFit: "cover",
    width: 420,
    height: 320,
    marginTop: 60,
  },
  minicar: {
    width: 80,
    height: 70,
    bottom: 80,
    marginLeft: 20,
    borderRadius: 6,
  },
  main: {
    // backgroundColor: "orange",
    height: "100%",
  },
  minicar1: {
    width: 80,
    height: 70,
    bottom: 150,
    marginLeft: 170,
    borderRadius: 8,
  },
  logo2: {
    width: 80,
    height: 70,
    bottom: 220,
    marginLeft: 320,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    bottom: " 20%",
    marginLeft: 15,
  },
  rate: {
    alignSelf: "flex-end",
    bottom: " 22%",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 15,
    color: "orange",
  },
  price: {
    fontSize: 18,
    bottom: " 21%",
    marginLeft: 18,
  },
  para: {
    bottom: "18%",
  },
  lorem: {
    fontSize: 15,
    // fontWeight: "bold",
    alignSelf: "center",
  },
  pilot: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  pilotone: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  see: {
    fontSize: 20,
    marginTop: 12,
  },
  shakeone: {
    height: 20,
    width: 20,
  },
  textOne: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "orange",
    width: "90%",
    bottom: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 30,
    borderRadius: 8,
  },
});
