import React from "react";
import classes from "./AboutPage.module.css";
import globalClasses from "../../styles/Global.module.css";
import Myprofile from "../../assets/about/tmb.jpg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SayHelloSection from "@/components/SayHelloSection/SayHelloSection";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Thierno&lsquo;s Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tmb.jpg" />
      </Head>
      <main className={globalClasses.container}>
        <div className={classes.aboutContainer}>
          <div className={classes.aboutMeContainer}>
            <div className={classes.aboutMeTextWrapper}>
              <p>
                Salut 👋 <br /><br />
                Je m&lsquo;appelle Thierno Barry, je suis un dévéloppeur full
                stack basé en Belgique.
              </p>
              <p>
                En tant que développeur Web MERN stack, je me spécialise dans la
                création d&lsquo;applications Web dynamiques et modernes à l&lsquo;aide de{" "}
                <span className={classes.aboutSpan}>
                  React, NextJS, TypeScript, NodeJS, MongoDB
                </span>
                .
              </p>
              <p>
                J&lsquo;apprends actuellement DevOps et System Admin comme{" "}
                <span className={classes.aboutSpan}>
                  Shell Script, Github Actions, Gitlab, docker, Kubernetes,
                  Jenkins, Vagrant, Ansible, Terraform, SonarQube, Prometheus,
                  Grafana, AWS, Azure
                </span>
                .
              </p>
              <p>
                Avec une base solide en JavaScript , je suis habile à développer
                à la fois le front-end et le back-end d&lsquo;applications Web, ce qui
                fait de moi un atout précieux dans le processus de développement
                du début à la fin.
              </p>
              <p>
                Mon expérience avec la pile MERN me permet de créer des
                applications rapides, réactives et évolutives qui offrent une
                expérience utilisateur transparente.
              </p>
              <p>
                Dans mes temps libres, j&lsquo;aime explorer des nouvelles
                technologies et me tenir au courant des dernières tendances de
                l&lsquo;industrie.
              </p>
              <p>
              Je suis à la recherche de nouveaux défis et d&lsquo;opportunités pour évoluer en tant que développeur fullStack et DevSecOps.
              </p>
            </div>
            <Image
              src={Myprofile}
              alt="Thierno"
              className={classes.aboutMeImage}
            />
          </div>
          <Link href="/contact" className={classes.checkOutCV}>
            Check out my CV
          </Link>
        </div>
        <SayHelloSection />
      </main>
    </>
  );
};

export default AboutPage;
