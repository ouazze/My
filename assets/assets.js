import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import jupyter_notebook from './jupyter_notebook.png';
import colab from './colab.png';
import anaconda from './anaconda.png';
import hadoop from './hadoop.png';
import oracle from './oracledb.png';
import excel from './excel.png';
import powerbi from './power bi.png';
import jira from './Jira.png';
import tensor from './tensor.png';
import github from './GitHub.png';
import Ai from './AI_lo.png'
import datascience from './datascience.png';
import big from './big data.png';
import engi from './engi.png';
import inl from './inh.png';
import insta from './insta.png';
import githu from './githu.png';
import power from './power.png';
import aws from './aws.png';
import P1 from './P1.png';
import P2 from './P2.png';



export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    power,
    aws,
    P1,
    P2,
    firebase,
    figma,
    git,
    inl,
    insta,
    githu, 
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    jupyter_notebook,
    colab,
    oracle,
    hadoop,
    anaconda,
    excel,
    powerbi,
    jira,
    tensor,
    github,
    Ai,
    datascience,
    big,
    engi
};

export const workData = [
    {
        title: 'Medical Chatbot',
        description: "A medical chatbot powered by LLMs (Llama2) to assist students and provide healthcare information without the need to read extensive books. It optimizes time and offers recommended links.",
        bgImage: '/work-5.png',
    },
    {
        title: 'Moroccan Sign Detection',
        description: "Detection of Moroccan signs on mobile platforms using Keras, based on TensorFlow.",
        bgImage: '/work-1.png',
    },
    {
        title: 'Student Recommendation System',
        description: "An AI model that recommends learning resources and skill development links for African students.",
        bgImage: '/work-2.jpg',
    },
    {
        title: 'Face Detection',
        description: "A deep learning model dedicated to face detection.",
        bgImage: '/work-3.png',
    },
    {
        title: 'Traffic Sign Detection',
        description: "A traffic sign recognition system using a deep learning model trained on a German dataset.",
        bgImage: '/work-4.png',
    },
];


export const serviceData = [
    { 
        icon: assets.Ai, 
        title: 'Artificial Intelligence', 
        description: 'Developing intelligent systems that can learn, adapt, and automate decision-making processes using machine learning, deep learning, and NLP techniques.', 
        link: '' 
    }, 
    { 
        icon: assets.datascience, 
        title: 'Data Science', 
        description: 'Transforming raw data into actionable insights through statistical analysis, predictive modeling, and data visualization to drive informed decision-making.', 
        link: '' 
    },
    { 
        icon: assets.engi, 
        title: 'Data Engineering', 
        description: 'Designing and building robust data pipelines, ETL processes, and scalable infrastructure to enable efficient data processing and management.', 
        link: '' 
    },
    { 
        icon: assets.big, 
        title: 'Big Data & Cloud', 
        description: 'Leveraging cloud computing and distributed systems to process and analyze large-scale data efficiently, ensuring scalability and high availability.', 
        link: '' 
    },
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: 'Python, R, Java, HTML, CSS, JavaScript, SQL,  NoSQL, Data Mining, Deep learning(LLMs), Machine Learning, Algorithm Development' },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'Master Big Data and Cloud Computing; Bachelor\'s degree: Science Mathématique and Computer Science' 
    },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git,assets.jupyter_notebook,assets.colab,assets.hadoop,assets.oracle,assets.excel,assets.powerbi,
    assets.jira, assets.tensor,assets.anaconda,assets.githu
];