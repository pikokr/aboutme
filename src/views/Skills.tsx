import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import ts from '../assets/logos/typescript.png'
import react from '../assets/logos/react.png'
import next from '../assets/logos/next.svg'
import blitz from '../assets/logos/blitz.svg'
import nest from '../assets/logos/nest.svg'
import kotlin from '../assets/logos/kotlin.png'
import SectionTitle from '../components/SectionTitle'

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 60px;
    min-height: calc(100vh - var(--header-height));
    flex-direction: column;
    gap: 30px;
`

const SkillList = styled(motion.div)`
    display: grid;
    max-width: 1200px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    gap: 20px;
    grid-template-columns: repeat(1, auto);
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, auto);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, auto);
    }
`

const skillContainerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const skillItemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
}

const SkillItem: React.FC<{ title: string; logo?: string; desc: string }> = ({
    title,
    logo,
    desc,
}) => {
    return (
        <motion.div
            variants={skillItemVariants}
            style={{
                background: '#fff',
                color: '#000',
                padding: 20,
                borderRadius: 10,
                display: 'flex',
                gap: 10,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                }}
            >
                <div
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: 20,
                        color: 'var(--description-white-color)',
                    }}
                >
                    {desc}
                </div>
            </div>
            <div style={{ flexGrow: 1 }} />
            {logo && (
                <div>
                    <img height={40} src={logo} alt={title} />
                </div>
            )}
        </motion.div>
    )
}

const Skills: React.FC = () => {
    return (
        <Container>
            <SectionTitle t="Skills" />
            <SkillList
                variants={skillContainerVariants}
                animate="show"
                initial="hidden"
                exit="exit"
            >
                <SkillItem
                    title="Typescript"
                    logo={ts}
                    desc="???????????? ?????? ?????? ?????? ??????????????? ????????????!"
                />
                <SkillItem
                    title="React"
                    logo={react}
                    desc="???????????? ?????? ???????????? ??????????????? ???????????????"
                />
                <SkillItem
                    title="Next.JS"
                    logo={next}
                    desc="React ?????? ??? ???????????????"
                />
                <SkillItem
                    title="Blitz"
                    logo={blitz}
                    desc="React ?????? ????????? ???????????????"
                />
                <SkillItem
                    title="NestJS"
                    logo={nest}
                    desc="???-????????? ???????????????"
                />
                <SkillItem
                    title="Kotlin"
                    logo={kotlin}
                    desc="???-???????????? ??? ????????? ?????????..."
                />
            </SkillList>
        </Container>
    )
}

export default Skills
