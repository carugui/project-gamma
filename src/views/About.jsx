import { Fragment } from "react";
import Window from "../components/window/Window";
import IconPortrait from "../components/svg/IconPortrait";
import GithubDesktop from "../components/desktopItems/GithubDesktop";
import InstagramDesktop from "../components/desktopItems/InstagramDesktop";
import CodepenDesktop from "../components/desktopItems/CodepenDesktop";



export default function About({ onClose }) {

    return <>

        <Window title="Sobre mí" size="medium" type='about' position='bottom-left' clickTo={onClose} content=
            {
                <div className='about-page'>
                    <header className='about-page__header'>
                        <IconPortrait />
                        <div>
                            <h2>Carla Cardona</h2>
                            <h3 className='h5'>Programadora y diseñadora web</h3>
                        </div>
                    </header>
                    
                    <hr className="rounded"></hr>
                    <p>Después de graduarme en la carrera en Arte y Diseño en la Escuela Superior de Arte y Tecnología en 2022 y aprender multitud de disciplinas como branding, modelado 3D y maquetación, decidí ampliar mis conocimientos centrándome en el diseño y desarrollo web front-end.</p>
                    <p>Recientemente me he graduado en el postgrado ID3 especializado en UX/UI, marketing digital y desarrollo web en la ESAT.</p>
                    <p>Aquí tienes mi <a href='../../documents/curriculum-carla-cardona.pdf' target='_blank'>curriculum</a>, y si estás interesado en el Diseño Gráfico aquí tienes mi <a href='../../public/documents/portfolio-laboral-carla-cardona.pdf' target='_blank'>portfolio de diseño</a>.</p>
                    <p>¡Si quieres saber más de mí no dudes en preguntarme lo que sea en < a href="mailto:soy.carugui@gmail.com">soy.carugui@gmail.com</a>!</p>

                </div>
            }
        />
    </>
}