import Link from 'next/link';
import React from 'react'
import { SiLinkedin, SiGithub, SiHashnode } from 'react-icons/si';

export default function Socials({className}:{className?:string}) {
    const socials = [
        {
        link: "https://www.linkedin.com/in/alexandram28/",
        label: "Linkedin",
        icon:SiLinkedin
        },
        {
          link: "https://github.com/Alexandra2888",
          label: "Github",
          icon:SiGithub
      },
      {
        link: "https://alexandra2888.hashnode.dev/",
        label: "Hashnode",
        icon:SiHashnode
        },
      ]
    
  return (
    <div className='py-10 flex justify-between items-center text-slate-50 animate-move-down'>
    <div className='flex items-center gap-5'>
    {socials.map((social, index) => {
      const Icon = social.icon;
      return (
        <Link href={social.link} key={index} aria-label={social.label}>
          <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
          </Link>
      )
    })}
      </div>
      </div>
  )
}


