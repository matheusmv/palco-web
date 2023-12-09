import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import styles from '@/styles/login.module.css'
import NavBar from '@/components/NavBarLogin'
import Footer from '@/components/Footer'


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (!result.error) {
                router.push('/')
            }
            setError('Email ou senha inválidos')
            setTimeout(() => {
                setError(false)
            }, 2000);

        } catch (error) {
            console.log('[Erro no login: ', error);
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <meta name='description' content='Tela de login' />
                <link rel='icon' href='/LogoIco.ico' />
            </Head>
            <div className={styles.background}>
                <NavBar />
                <div className={styles.page}>
                    <p className={styles.paragrafo}>Login</p>
                    <form className={styles.form} onSubmit={handleSignIn}>
                        <div className={styles.nomes}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <Link className={styles.senha} href="/esqueceuSuaSenha">Esqueceu sua senha</Link>
                    </form>
                    {error && <span className="text-red-400 text-lg text-center block mt-2">{error}</span>}
                    <div>
                        <button className={styles.btn} type="submit">
                            ENTRAR
                        </button>
                    </div>
                    <div>
                        <p>Não possui uma conta?<span className={styles.cor}>
                            <Link href='/criarConta'> Crie uma</Link></span></p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>


    )
}

