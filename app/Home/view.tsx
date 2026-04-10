import { 
  TextInput, 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Pressable, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import useHomeModel from "./model";

export default function HomeView ({
  nome,
  setNome,
  mostrarNome,
  handleMostrarNome,
  setMostrarNome,
  erro,
}: ReturnType<typeof useHomeModel>) {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Bem-vindo!</Text>

        {/* Campo de entrada com ícone de usuário */}
        <View style={styles.inputContainer}>
          <Image source={require("../../assets/images/user-icon.png")} style={styles.icon}/>
          <TextInput
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={(text) => {
              setNome(text);
              setMostrarNome(false);
            }}
            style={styles.input}
          />
        </View>

        {/* Botão principal com efeito de clique */}
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={handleMostrarNome}
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.8 }
            ]}
          >
            <Text style={styles.buttonText}>Mostrar Nome</Text>
          </Pressable>
        </View>

        {/* Mensagem de erro com ícone */}
        {erro !== "" && (
          <View style={styles.errorContainer}>
            <Image source={require("../../assets/images/alert-icon.png")} style={styles.errorIcon}/>
            <Text style={styles.errorText}>{erro}</Text>
          </View>
        )}

        {/* Nome exibido */}
        {mostrarNome && <Text style={styles.nome}>Olá, {nome}!</Text>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: wp("5%"),
  },
  title: {
    fontSize: wp("8%"),
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: hp("5%"),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("80%"),
    height: wp("15%"),
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: wp("8%"),
    backgroundColor: "#fff",
    paddingHorizontal: wp("3%"),
    marginBottom: hp("2%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    width: wp("9%"),
    height: wp("9%"),
    marginRight: wp("2%"),
  },
  input: {
    flex: 1,
    fontSize: wp("4%"),
    color: "#111827",
  },
  buttonContainer: {
    width: wp("80%"),
    marginBottom: hp("2%"),
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: hp("2%"),
    borderRadius: wp("8%"),
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    height: wp("11%"),
    width: wp("80%"),
    borderRadius: wp("2%"),
    padding: wp("2%"),
    marginTop: hp("4%"),
  },
  errorIcon: {
    width: wp("5%"),
    height: wp("5%"),
    marginRight: wp("2%"),
  },
  errorText: {
    color: "#DC2626",
    fontSize: wp("4%"),
  },
  nome: {
    marginTop: hp("4%"),
    fontSize: wp("7%"),
    fontWeight: "bold",
    color: "#1E3A8A",
  },
});
