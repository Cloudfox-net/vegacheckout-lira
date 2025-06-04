import type { DefaultTheme } from 'vitepress'
import contributorNames from './contributor-names.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam extends DefaultTheme.TeamMember {
  // required to download avatars from GitHub
  github: string
  linkedin?: string
}

const contributorsAvatars: Record<string, string> = {}

function getAvatarUrl(name: string) {
  return `https://github.com/${name}.png`
}

export const contributors = (contributorNames).reduce<Contributor[]>((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [])

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }]
  if (tm.linkedin) {
    tm.links.push({ icon: 'linkedin', link: `https://www.linkedin.com/in/${tm.linkedin}` })
  }

  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars['abrcoutinho'],
    name: 'Abê',
    github: 'abrcoutinho',
  },
  {
    avatar: contributorsAvatars['allysonsilva'],
    name: 'Alyson Silva',
    github: 'allysonsilva',
  },
  {
    avatar: contributorsAvatars['cristyz'],
    name: 'Cristóvão',
    github: 'cristyz',
  },
  {
    avatar: contributorsAvatars['diogo762'],
    name: 'Diogo',
    github: 'diogo762',
  },
  {
    avatar: contributorsAvatars['eliseu85'],
    name: 'Eliseu',
    github: 'eliseu85',
  },
  {
    avatar: contributorsAvatars['fabiom1122'],
    name: 'Fabio Rosa',
    github: 'fabiom1122',
  },
  {
    avatar: contributorsAvatars['isckosta'],
    name: 'Israel Costa',
    github: 'isckosta',
    linkedin: 'isckosta',
  },
  {
    avatar: contributorsAvatars['JonecoBoy'],
    name: 'Jonas Nunes',
    github: 'JonecoBoy',
  },
  {
    avatar: contributorsAvatars['leandroaraujovega'],
    name: 'Leandro Araujo',
    github: 'leandroaraujovega',
  },
  {
    avatar: contributorsAvatars['luangroliveira'],
    name: 'Luan Oliveira',
    github: 'luangroliveira',
  },
  {
    avatar: contributorsAvatars['lucianno-nascimento'],
    name: 'Lucianno Nascimento',
    github: 'lucianno-nascimento',
  },
  {
    avatar: contributorsAvatars['lzanette'],
    name: 'Leonardo Zanette',
    github: 'lzanette',
  },
  {
    avatar: contributorsAvatars['marcello-machado'],
    name: 'Marcelo Machado',
    github: 'marcello-machado',
  },
  {
    avatar: contributorsAvatars['marcusvbda'],
    name: 'Vinicius Bassalobre',
    github: 'marcusvbda',
    linkedin: 'mvbassalobre',
  },
  {
    avatar: contributorsAvatars['paulophp'],
    name: 'Paulo Queiroz',
    github: 'paulophp',
  },
  {
    avatar: contributorsAvatars['raphamzn'],
    name: 'Raphael Abreu',
    github: 'raphamzn',
  },
  {
    avatar: contributorsAvatars['ribeiroevandro'],
    name: 'Evandro Ribeiro',
    github: 'ribeiroevandro',
    title: 'Frontend Developer',
    linkedin: 'ribeiroevandro',
  },
  {
    avatar: contributorsAvatars['ricardosnery'],
    name: 'Nery',
    github: 'ricardosnery',
  },
  {
    avatar: contributorsAvatars['ricardovitryne'],
    name: 'Ricardo Gonçalves',
    github: 'ricardovitryne',
  },
  {
    avatar: contributorsAvatars['sheldry-souza'],
    name: 'Sheldry Souza',
    github: 'sheldry-souza',
  },
  {
    avatar: contributorsAvatars['Vitor-Melo'],
    name: 'Vitor Melo',
    github: 'Vitor-Melo',
  },
  {
    avatar: contributorsAvatars['WilsonOJr'],
    name: 'Wilson de Oliveira Jr',
    github: 'WilsonOJr',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export { teamMembers }