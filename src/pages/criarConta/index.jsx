import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/login.module.css'
import NavBar from '@/components/NavBarLogin'
import Footer from '@/components/Footer'


export default function CriarConta() {

    const [mostrarMensagem, setMostrarMensagem] = useState(false)
    const [mostrarMensagemErro, setMostrarMensagemErro] = useState(false)

    const [usuario, setUsuario] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(usuario),
            })

            if (response.ok) {
                const data = await response.text();
                console.log('Dados enviados com sucesso:', data);
                setMostrarMensagem(true);
                setTimeout(() => {
                    setMostrarMensagem(false);
                    onClose();
                    window.location.reload();
                }, 2000);
            } else if (response.status === 400) {
                const data = await response.text();
                console.error('Erro ao cadastrar usuário:', data.error);
                setTimeout(() => {
                    setMostrarMensagemErro(true);
                }, 2000);
                setMostrarMensagemErro(false);
            } else {
                console.error('Erro ao enviar os dados:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Criar Conta</title>
                <meta name='description' content='Tela de login' />
                <link rel='icon' href='/LogoIco.ico' />
            </Head>
            <div className={styles.background}>
                <NavBar />
                <div className={styles.page}>
                    <p className={styles.paragrafo}>Criar Conta</p>
                    <form className={styles.form} onSubmit={handleCreate}>
                        <div className={styles.nomes}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={usuario.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Senha"
                                value={usuario.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p className={styles.instrucao}>Mínimo de 5 caracteres, sem espaço em branco</p>
                    </form>
                    {mostrarMensagem && (
                        <span className="block text-center bg-red-100 border border-green-400 text-green-700 font-bold text-base rounded mt-2">
                            Usuário Cadastrado com Sucesso
                        </span>
                    )}
                    {mostrarMensagemErro && (
                        <span className="block text-center bg-red-100 border border-red-400 text-red-700 font-bold text-base rounded mt-2">
                            Email já cadastrado
                        </span>
                    )}
                    <div>
                        <button className={styles.btn} type="submit">
                            CRIAR CONTA
                        </button>
                    </div>
                    <div>
                        <p>Já possui uma conta?<span className={styles.cor}>
                            <Link href='/login'> ENTRAR</Link></span></p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>


    )
}

