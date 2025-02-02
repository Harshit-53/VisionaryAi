import logo from './logo2.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    razorpay_logo,
    stripe_logo
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:'Graphic Designer',
        stars:5,
        text:`I've been using this tool for over a year now, and it’s an absolute game-changer. The ease of creating stunning visuals from simple text prompts is unmatched. It’s intuitive, fast, and consistently delivers high-quality results.`
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Content Creator',
        stars:5,
        text:`This text-to-image has become my go-to for generating unique images effortlessly. It’s user-friendly and allows me to create visuals that stand out. Perfect for social media posts or creative projects, it’s saved me countless hours of design work.`
    },
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:' Graphic Designer',
        stars:5,
        text:`This is impressive! It translates my ideas into visuals with accuracy and creativity. The interface is simple, and the output quality never disappoints. A must-have for anyone needing quick and custom graphics.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 50,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 200,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 1500,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]