import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useHomeModel() {
    const [nome, setNome] = useState('');
    const [mostrarNome, setMostrarNome] = useState(false);
    const [erro, setErro] = useState('');

    useEffect(() => {
        async function fetchNome() {
            const valorSalvo = await carregarNome();

            if (valorSalvo) {
                setNome(valorSalvo)
                setMostrarNome(true)
            }
        }

        fetchNome()
    }, []);
    
    function handleMostrarNome () {
        if (nome.trim() == "") {
            setErro("O nome não pode estar vazio");
            salvarNome("")
            setMostrarNome(false)

        } else {
            setErro("")
            setMostrarNome(true);
            salvarNome(nome)
        }
    }

    async function salvarNome(nome : string) {
        try {
            AsyncStorage.setItem('nome', nome)
            console.log("Nome salvo com sucesso!")
        } catch (exception) {
            console.error("Erro ao salvar: ", exception)
        }
    }

    async function carregarNome() {
        try {
            const valor = await AsyncStorage.getItem('nome');
            if (valor !== null) {
                console.log("Nome carregado: ", valor)
                return valor;
            }
        } catch (exception) {
            console.error("Erro ao carregar: ", exception)
        } 
    }

    return {
        nome,
        setNome,
        mostrarNome,
        setMostrarNome,
        handleMostrarNome,
        erro,
    }
}