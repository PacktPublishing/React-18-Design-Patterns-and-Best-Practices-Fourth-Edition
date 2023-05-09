import React from 'react'

import Select from './index'

const stories = {
  component: 'Select',
  props: [
    {
      name: 'top',
      type: 'string',
      description: ''
    },
    {
      name: 'name',
      type: 'string',
      default: '',
      description: ''
    },
    {
      name: 'label',
      type: 'string',
      default: '',
      description: ''
    },
    {
      name: 'onClick',
      type: 'function',
      default: '',
      description: ''
    },
    {
      name: 'options',
      type: 'Option',
      default: '',
      description: ''
    }
  ],
  stories: [
    {
      name: 'Select',
      description: 'Language',
      render: (
        <Select
          top="125px"
          name="language"
          label="Select language"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          searchable
          size="xLarge"
          options={[
            {
              option: 'Aldrin Baruc Munguia Moran',
              value: '00000000-0000-0000-69e9-f8f00e19a946',
              selected: false
            },
            {
              option: 'Alma Cecilia Anguiano Galindo',
              value: '00000000-0000-0000-15e5-1dde098bb5a9',
              selected: false
            },
            {
              option: 'Alondra Janeth Gomez Rodriguez',
              value: '00000000-0000-0000-2cfe-5e378bc0a48a',
              selected: false
            },
            {
              option: 'Alvar Miguel Martinez García',
              value: '00000000-0000-0000-2942-a1d20aacde50',
              selected: false
            },
            {
              option: 'Ana Fabiola Flores Sanchez',
              value: '00000000-0000-0000-13c4-aedd0dddb7a5',
              selected: false
            },
            {
              option: 'Ana Patricia Zepeda Salvador',
              value: '00000000-0000-0000-49ba-496b09bb9210',
              selected: false
            },
            {
              option: 'Ana Rodriguez',
              value: '00000000-0000-0000-2e1a-29a58c9cb2a3',
              selected: false
            },
            {
              option: 'Andreína Yunuén Herrejón Chávez',
              value: '00000000-0000-0000-737e-6e1b8b91678d',
              selected: false
            },
            {
              option: 'Angeles Yuliana García Torres',
              value: '00000000-0000-0000-79f5-816e89d1aaa3',
              selected: false
            },
            {
              option: 'Antonio Israel Solorio Castellanos',
              value: '00000000-0000-0000-5f5d-6fe70ef71ffd',
              selected: false
            },
            {
              option: 'Araceli Margarita Vazquez Rivas',
              value: '00000000-0000-0000-1b64-fb150fecf675',
              selected: false
            },
            {
              option: 'Arianna Villaseñor Guerrero',
              value: '00000000-0000-0000-4e13-08ff0d5752e1',
              selected: false
            },
            {
              option: 'Arlette Montserrat Vizcaino Alcantar',
              value: '00000000-0000-0000-579c-ed990b654bd1',
              selected: false
            },
            {
              option: 'Blanca Elizabeth Lepiz Molina',
              value: '00000000-0000-0000-3eb2-98928827b3e6',
              selected: false
            },
            {
              option: 'Blanca Estela Acevedo Gordillo',
              value: '00000000-0000-0000-18d5-a46c88196fb1',
              selected: false
            },
            {
              option: 'Blanca Estela Hernandez Ramirez',
              value: '00000000-0000-0000-0c7d-cab78a2d49c0',
              selected: false
            },
            {
              option: 'Blanca Yanely Cruz Ayala',
              value: '00000000-0000-0000-77f9-745f8b5b91af',
              selected: false
            },
            {
              option: 'Carlos Antonio Esteban Aguilar',
              value: '00000000-0000-0000-4b7e-6b6d89b2e600',
              selected: false
            },
            {
              option: 'Carlos Santana Roldan',
              value: '00000000-0000-0000-78f5-19f68c49f05b',
              selected: false
            },
            {
              option: 'Carmen Cosio Avila',
              value: '00000000-0000-0000-7ac5-1ce30ecfa784',
              selected: false
            },
            {
              option: 'Carmen Mercado Aguirre',
              value: '00000000-0000-0000-1752-c31589c50f4a',
              selected: false
            },
            {
              option: 'Cesar Agustin Ramírez Silva',
              value: '00000000-0000-0000-52d2-cafb0f016e1b',
              selected: false
            },
            {
              option: 'Claudia Excaret Santos Campusano',
              value: '00000000-0000-0000-783c-4f8e8a006b42',
              selected: false
            },
            {
              option: 'Claudia Gabriela Ramirez Arenas',
              value: '00000000-0000-0000-3c85-808e0b5f36e1',
              selected: false
            },
            {
              option: 'Claudia Graciela Ortega Villavicencio',
              value: '00000000-0000-0000-5669-4ca38c87ce98',
              selected: false
            },
            {
              option: 'Claudia Josefina Corona Alvarez',
              value: '00000000-0000-0000-5eec-9ddc0be432b7',
              selected: false
            },
            {
              option: 'Claudia Montserrat Gaitan Cruz',
              value: '00000000-0000-0000-0a9f-25690f098e97',
              selected: false
            },
            {
              option: 'Consuelo Cardenas Larios',
              value: '00000000-0000-0000-17a0-4b8d0f7c5d2b',
              selected: false
            },
            {
              option: 'Cristina Miranda Alcala',
              value: '00000000-0000-0000-6750-ca738eb1edcf',
              selected: false
            },
            {
              option: 'Cristina Ramirez Ozorio',
              value: '00000000-0000-0000-0d02-5ce40b3bc3ed',
              selected: false
            },
            {
              option: 'Edgar Enrique Orozco',
              value: '00000000-0000-0000-29f1-37850ab1e964',
              selected: false
            },
            {
              option: 'Edsel Barbosa Gonzalez',
              value: '00000000-0000-0000-42e5-6b778e142ad3',
              selected: false
            },
            {
              option: 'Edward Zepeda Ruelas',
              value: '00000000-0000-0000-6b3c-3dc9082e8260',
              selected: false
            },
            {
              option: 'Elena Mariana Nava Linares',
              value: '00000000-0000-0000-5e35-ef33880a3210',
              selected: false
            },
            {
              option: 'Elvira Carrillo Gaytan',
              value: '00000000-0000-0000-41ef-bd0889131208',
              selected: false
            },
            {
              option: 'Enrique Arreguin García',
              value: '00000000-0000-0000-4428-0a830ac0603a',
              selected: false
            },
            {
              option: 'Erika Marquez Alvarez',
              value: '00000000-0000-0000-4a26-ae508d0e79f9',
              selected: false
            },
            {
              option: 'Erika Vanessa Perez Martinez',
              value: '00000000-0000-0000-52a7-019f0fdbb1fd',
              selected: false
            },
            {
              option: 'Esteban Nuñez Sánchez',
              value: '00000000-0000-0000-4c3c-df060f79c049',
              selected: false
            },
            {
              option: 'Fatima Montserrat Rodriguez Mejia',
              value: '00000000-0000-0000-2476-6cf40ed25d38',
              selected: false
            },
            {
              option: 'Fermin Santos Palacios',
              value: '00000000-0000-0000-5125-99410850986f',
              selected: false
            },
            {
              option: 'Fernando García Ruelas',
              value: '00000000-0000-0000-41ed-d3b40fab15da',
              selected: false
            },
            {
              option: 'Fernando Jose Aguirre Ceballos',
              value: '00000000-0000-0000-781c-9c8209524290',
              selected: false
            },
            {
              option: 'Francisco Javier Morales de la Peña',
              value: '00000000-0000-0000-7422-89550e3da07d',
              selected: false
            },
            {
              option: 'Francisco Javier Sevilla',
              value: '00000000-0000-0000-294c-903c0864221a',
              selected: false
            },
            {
              option: 'Georgina Guadalupe García Ruiz',
              value: '00000000-0000-0000-4c93-d60a0c33ec9a',
              selected: false
            },
            {
              option: 'Gerardo Topete Cisneros',
              value: '00000000-0000-0000-0d54-739e0ea42b17',
              selected: false
            },
            {
              option: 'German Gudiño Lizama',
              value: '00000000-0000-0000-7a64-c01d0f9fdba2',
              selected: false
            },
            {
              option: 'Glenda Araceli Becerra Toro',
              value: '00000000-0000-0000-0112-e1e98943486b',
              selected: false
            },
            {
              option: 'Glenda Elizabeth Rico Ruiz',
              value: '00000000-0000-0000-34d5-a0a58ab84066',
              selected: false
            },
            {
              option: 'Glenda Lizette Jaramillo Velasco',
              value: '00000000-0000-0000-30f3-77930d0ebd79',
              selected: false
            },
            {
              option: 'Hever Alejandro Acevedo Macias',
              value: '00000000-0000-0000-5f8e-b66b8bc5f3c3',
              selected: false
            },
            {
              option: 'Hugo Ceballos Lopez',
              value: '00000000-0000-0000-236a-caa80aab7cad',
              selected: false
            },
            {
              option: 'Iris Avelarde Zamora',
              value: '00000000-0000-0000-5ae7-9cbf890da898',
              selected: false
            },
            {
              option: 'Irma Elizabeth Cervantes Gaspar',
              value: '00000000-0000-0000-4bb9-cadc8a8bbfea',
              selected: false
            },
            {
              option: 'Isabel Anirelec Mendoza Cruz',
              value: '00000000-0000-0000-3589-65c98f72084e',
              selected: false
            },
            {
              option: 'Ivan Alejandro Novela Macias',
              value: '00000000-0000-0000-371b-075c0d0eaf4d',
              selected: false
            },
            {
              option: 'Janet Rios Escobar',
              value: '00000000-0000-0000-278e-5ff98b6e1b5c',
              selected: false
            },
            {
              option: 'Jaret Jafet Gonzalez Romero',
              value: '00000000-0000-0000-5d12-85500b6ff776',
              selected: false
            },
            {
              option: 'Jesus Ramirez',
              value: '00000000-0000-0000-2f44-a35489fe2958',
              selected: false
            },
            {
              option: 'Jesús Haro Lozano',
              value: '00000000-0000-0000-3d5e-50fd0ab68484',
              selected: false
            },
            {
              option: 'Jorge Omar Moreno Martinez',
              value: '00000000-0000-0000-37a9-878a8b728725',
              selected: false
            },
            {
              option: 'Jose Miguel Victoriano Sánchez',
              value: '00000000-0000-0000-13d5-99b48ae18c57',
              selected: false
            },
            {
              option: 'José De La Mora',
              value: '00000000-0000-0000-4b39-f29b0b5558a4',
              selected: false
            },
            {
              option: 'José Fabián Estrella García',
              value: '00000000-0000-0000-1a0c-0e6f8cdeeed1',
              selected: false
            },
            {
              option: 'José Grajeda Ávila',
              value: '00000000-0000-0000-5f1f-a72e8ebdea0b',
              selected: false
            },
            {
              option: 'José Ignacio Mendoza Ocon',
              value: '00000000-0000-0000-36e3-0af88e92264a',
              selected: false
            },
            {
              option: 'Juan Ramon Velasco De la Luz',
              value: '00000000-0000-0000-41db-3b278cd8aa8a',
              selected: false
            },
            {
              option: 'Juliana Gonzalez Esparza',
              value: '00000000-0000-0000-2762-c0b6092d8622',
              selected: false
            },
            {
              option: 'Karina Juarez Ramirez',
              value: '00000000-0000-0000-4c92-7c250baeac4d',
              selected: false
            },
            {
              option: 'Karina Montserrat Romero Mendoza',
              value: '00000000-0000-0000-265f-27440b909e81',
              selected: false
            },
            {
              option: 'Karla Adilene Iglesias Delgado',
              value: '00000000-0000-0000-333a-c41e0918c2a4',
              selected: false
            },
            {
              option: 'Karla Alejandra Castillo Solano',
              value: '00000000-0000-0000-0d84-301b883db769',
              selected: false
            },
            {
              option: 'Karla Cristina Díaz Ordoñez',
              value: '00000000-0000-0000-0f39-a3898f18fc2c',
              selected: false
            },
            {
              option: 'Karla Griselda Rosales Hernandez',
              value: '00000000-0000-0000-17f3-52498f2944d7',
              selected: false
            },
            {
              option: 'Karla Mendoza Alvarez del Castillo',
              value: '00000000-0000-0000-3db5-b7d10c44af78',
              selected: false
            },
            {
              option: 'Karla Victoria Hernandez Tene',
              value: '00000000-0000-0000-4df8-0b1388bd41f1',
              selected: false
            },
            {
              option: 'Laura Cecilia Cisneros Cárdenas',
              value: '00000000-0000-0000-42d2-af598bee31e7',
              selected: false
            },
            {
              option: 'Laura Citlali Hernandez Hernandez',
              value: '00000000-0000-0000-7953-6f740b163afc',
              selected: false
            },
            {
              option: 'Laura López Barreto',
              value: '00000000-0000-0000-5aa4-dfca0d176530',
              selected: false
            },
            {
              option: 'Leticia Juarez Muñiz',
              value: '00000000-0000-0000-724f-82588a19c4ee',
              selected: false
            },
            {
              option: 'Lizette Rodriguez Garcia',
              value: '00000000-0000-0000-3482-d5a98e10c981',
              selected: false
            },
            {
              option: 'Lorely Santana Romero',
              value: '00000000-0000-0000-37fe-b2a60af861fe',
              selected: false
            },
            {
              option: 'Lourdes Concepción Cabadas Delgado',
              value: '00000000-0000-0000-439f-17378fba45ea',
              selected: false
            },
            {
              option: 'Marco Aurelio Gallardo Rodriguez',
              value: '00000000-0000-0000-742c-fbde8ee75dcf',
              selected: false
            },
            {
              option: 'Maria Imelda Virgen Moreno',
              value: '00000000-0000-0000-051d-9e360d6dcdc8',
              selected: false
            },
            {
              option: 'Maria Liduvina Mendoza Sandoval',
              value: '00000000-0000-0000-18d8-8c5d89032503',
              selected: false
            },
            {
              option: 'Maria de Jesus Lujano Carrillo',
              value: '00000000-0000-0000-0c53-b7048d5591bc',
              selected: false
            },
            {
              option: 'Maria de Jesus Ochoa Carrillo',
              value: '00000000-0000-0000-7024-5ea88ff5a696',
              selected: false
            },
            {
              option: 'Maritza Sanchez Larios',
              value: '00000000-0000-0000-2119-28158dfa406b',
              selected: false
            },
            {
              option: 'Martha Berenice Bermudez Aguirre',
              value: '00000000-0000-0000-67d1-1f3d0a993d74',
              selected: false
            },
            {
              option: 'Martha Lilia Chavez Flores',
              value: '00000000-0000-0000-4f6b-f6510e2c6186',
              selected: false
            },
            {
              option: 'Martin Adrian Medina Landin',
              value: '00000000-0000-0000-0152-07270a244dcf',
              selected: false
            },
            {
              option: 'Martin Alberto Ramos Deniz',
              value: '00000000-0000-0000-187c-06de08f276af',
              selected: false
            },
            {
              option: 'María Elena Verduzco Acosta',
              value: '00000000-0000-0000-0a6f-8a398815df6c',
              selected: false
            },
            {
              option: 'María Elizabeth Ochoa Amador',
              value: '00000000-0000-0000-1a87-829e0d1f3f0a',
              selected: false
            },
            {
              option: 'María Guadalupe Corona Avalos',
              value: '00000000-0000-0000-51b6-5bd98f0c18c5',
              selected: false
            },
            {
              option: 'María Guadalupe Hernandez Acevedo',
              value: '00000000-0000-0000-0580-9a8889f86e0a',
              selected: false
            },
            {
              option: 'María del Carmen Armenta Ramírez',
              value: '00000000-0000-0000-566e-354188fd0fee',
              selected: false
            },
            {
              option: 'María del Carmen Valdivia Zarate',
              value: '00000000-0000-0000-52b9-1e3c8ee4bc79',
              selected: false
            },
            {
              option: 'María del Rocio Rodriguez Ochoa',
              value: '00000000-0000-0000-4513-7fc308994523',
              selected: false
            },
            {
              option: 'Mayra Leticia Castillo Contreras',
              value: '00000000-0000-0000-2c2c-0b5008829cab',
              selected: false
            },
            {
              option: 'Mayra Prieto Rodríguez',
              value: '00000000-0000-0000-6802-ec4b0d2d2698',
              selected: false
            },
            {
              option: 'Melissa Elizabeth Juarez Ramirez',
              value: '00000000-0000-0000-6a54-25148a3f77a5',
              selected: false
            },
            {
              option: 'Mercedes Carrazco Fernandez',
              value: '00000000-0000-0000-3b12-7ba18d3378e0',
              selected: false
            },
            {
              option: 'Monica Elena Ortiz Iñiguez',
              value: '00000000-0000-0000-5f73-37488efaf2d0',
              selected: false
            },
            {
              option: 'Monica Fabiola García García',
              value: '00000000-0000-0000-6ead-aebd8ea11689',
              selected: false
            },
            {
              option: 'Monica Fodor',
              value: '00000000-0000-0000-78dd-92af0b07e655',
              selected: false
            },
            {
              option: 'Nestor Javier Macias Lazcano',
              value: '00000000-0000-0000-1bec-79ec0c483722',
              selected: false
            },
            {
              option: 'Nora Isabel Silva Cabrera',
              value: '00000000-0000-0000-24bd-33868c211ef6',
              selected: false
            },
            {
              option: 'Norma Angelica Romero Flores',
              value: '00000000-0000-0000-62ad-ee298ceb3f03',
              selected: false
            },
            {
              option: 'Odri Erandi Osorio Maldonado',
              value: '00000000-0000-0000-66fa-60c30b14bf03',
              selected: false
            },
            {
              option: 'Olivia Guadalupe Acevedo Alvarez',
              value: '00000000-0000-0000-09f6-38c28ad7df2f',
              selected: false
            },
            {
              option: 'Omar Alejandro Perez Gutierrez',
              value: '00000000-0000-0000-7169-5eaf8a4cdb3c',
              selected: false
            },
            {
              option: 'Patricia Zepeda Contreras',
              value: '00000000-0000-0000-3ff8-a97e8b1f28c3',
              selected: false
            },
            {
              option: 'Paula Gabriela Carrillo Carrillo',
              value: '00000000-0000-0000-0ad6-00098858565a',
              selected: false
            },
            {
              option: 'Paulina Ramirez Cruz',
              value: '00000000-0000-0000-13ba-ba090bfee2c7',
              selected: false
            },
            {
              option: 'Paulina del Rosario Velasco Medina',
              value: '00000000-0000-0000-09cd-b1448ff7936d',
              selected: false
            },
            {
              option: 'Pedro Pablo Mancilla Sánchez',
              value: '00000000-0000-0000-6003-e1a40951d30c',
              selected: false
            },
            {
              option: 'Ramses Heriberto Vazquez Gomez',
              value: '00000000-0000-0000-2327-ec8b8c2d37db',
              selected: false
            },
            {
              option: 'Rosa del Carmen Danyra Castellanos Arroyo',
              value: '00000000-0000-0000-63c6-3ef10a4becd1',
              selected: false
            },
            {
              option: 'Rosalinda Rodriguez Gomez',
              value: '00000000-0000-0000-ed23-fa8960ec34',
              selected: false
            },
            {
              option: 'Rosario Esther Topete Jaramillo',
              value: '00000000-0000-0000-5f81-274f0cb1a2db',
              selected: false
            },
            {
              option: 'Salvador Zamora Bayardo',
              value: '00000000-0000-0000-6d58-c1858fd056fc',
              selected: false
            },
            {
              option: 'Sara Melissa Amezcua Rivera',
              value: '00000000-0000-0000-2fbb-95b78a7b134d',
              selected: false
            },
            {
              option: 'Sarahi Guadalupe Hernandez Cuevas',
              value: '00000000-0000-0000-1e71-47ff8a11f56e',
              selected: false
            },
            {
              option: 'Stephanie Giselle Vallejo Sandoval',
              value: '00000000-0000-0000-3ba9-2a4409084458',
              selected: false
            },
            {
              option: 'Veronica Silva Ramirez',
              value: '00000000-0000-0000-7c7a-26a30b3e951d',
              selected: false
            },
            {
              option: 'Víctor Manuel Romero López',
              value: '00000000-0000-0000-3580-dd860e49aa33',
              selected: false
            },
            {
              option: 'Xiomara Isis Contreras Cobo',
              value: '00000000-0000-0000-71d0-17280aae8afd',
              selected: false
            },
            {
              option: 'Yazmin Anguiano Virgen',
              value: '00000000-0000-0000-633f-42688ca51808',
              selected: false
            },
            {
              option: 'Yolanda Mendoza Garcia',
              value: '00000000-0000-0000-0ae2-b5dc8b155830',
              selected: false
            }
          ]}
        />
      ),
      prop: '',
      code: `
        <Select
          top="160px"
          name="language"
          label="Select language"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          options={[
            {
              option: 'English',
              value: 'en'
            },
            {
              option: 'Spanish',
              value: 'es'
            },
            {
              option: 'French',
              value: 'fr',
              selected: true
            },
            {
              option: 'German',
              value: 'ge'
            },
            {
              option: 'Japan',
              value: 'jp'
            },
            {
              option: 'Chinese',
              value: 'ch'
            },
            {
              option: 'Korean',
              value: 'kr'
            }
          ]}
        />
      `
    },
    {
      name: 'Select with Booleans',
      description: 'Radio with checked prop',
      render: (
        <Select
          name="published"
          color="dark"
          label="Published"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          options={[
            {
              option: 'Yes',
              value: true,
              selected: false
            },
            {
              option: 'No',
              value: false,
              selected: true
            }
          ]}
        />
      ),
      code: `
        <Select
          name="published"
          type="white"
          label="Published"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          options={[
            {
              option: 'Yes',
              value: true
            },
            {
              option: 'No',
              value: false,
              selected: true
            }
          ]}
        />
      `
    }
  ]
}

export default stories
