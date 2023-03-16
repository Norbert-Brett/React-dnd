// Drag and Drop it likes it hot (dnd) - Typescript introduction - Portfolio 101

import React, { useState } from 'react'
import './App.css'
import { DndContext } from '@dnd-kit/core'
import Draggable from './Draggable'
import Droppable from './Droppable'

function App() {
  const containers = [
    'React',
    'Redux',
    'Typescript',
    'Vue',
    'Nuxt',
    'Tailwind',
    'Bootstrap',
    'Preact',
    'Svelte',
    'Angular',
    'Ember',
    'Gatsby',
    'Next',
    'Node',
    'Nest',
    'GraphQL',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Firebase',
    'AWS',
    'Heroku',
    'Netlify',
    'Vercel',
    'Docker',
    'Kubernetes',
    'Solid',
    'Git',
    'GitHub',
    'Go',
    'Python',
    'Java',
    'C',
    'CSharp',
    'Rust',
    'Swift',
    'Kotlin',
    'PHP',
    'Ruby',
    'Perl',
    'Scala',
    'JavaScript',
    'Vite',
    'Webpack',
  ]
  const [parent, setParent] = useState(null)

  type Skill = {
    [skill: string]: {
      text: string
      image: string
    }
  }

  const skillMap: Skill = {
    React: {
      text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.',
      image: 'https://cdn.svgporn.com/logos/react.svg',
    },
    Redux: {
      text: 'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebooks Flux architecture, it was created by Dan Abramov and Andrew Clark',
      image: 'https://cdn.svgporn.com/logos/redux.svg',
    },
    Typescript: {
      text: 'TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.',
      image: 'https://cdn.svgporn.com/logos/typescript-icon-round.svg',
    },
    Vue: {
      text: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
      image: 'https://cdn.svgporn.com/logos/vue.svg',
    },
    Nuxt: {
      text: 'Nuxt.js is a free and open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js. The framework is advertised as a "Meta-framework for universal applications". ',
      image: 'https://cdn.svgporn.com/logos/nuxt-icon.svg',
    },
    Tailwind: {
      text: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.',
      image: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
    },
    Bootstrap: {
      text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
      image: 'https://cdn.svgporn.com/logos/bootstrap.svg',
    },
    Preact: {
      text: 'Preact provides the thinnest possible Virtual DOM abstraction on top of the DOM. It builds on stable platform features, registers real event handlers and plays nicely with other libraries. Preact can be used directly in the browser without any transpilation steps.',
      image: 'https://cdn.svgporn.com/logos/preact.svg',
    },
    Svelte: {
      text: 'Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.',
      image: 'https://cdn.svgporn.com/logos/svelte-icon.svg',
    },
    Angular: {
      text: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      image: 'https://cdn.svgporn.com/logos/angular-icon.svg',
    },
    Ember: {
      text: 'Ember.js is an open-source JavaScript web framework that utilizes a component-service pattern. It allows developers to create scalable single-page web applications by incorporating common idioms, best practices, and patterns from other single-page-app ecosystem patterns into the framework.',
      image: 'https://cdn.svgporn.com/logos/ember-tomster.svg',
    },
    Gatsby: {
      text: 'Gatsby is a React-based open source framework with performance, scalability and security built-in.',
      image: 'https://cdn.svgporn.com/logos/gatsby.svg',
    },
    Next: {
      text: 'Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.',
      image: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
    },
    Node: {
      text: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
      image: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
    },

    Nest: {
      text: 'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).',
      image: 'https://cdn.svgporn.com/logos/nestjs.svg',
    },
    GraphQL: {
      text: 'GraphQL is an open-source data query language and data manipulation language for APIs, and a query runtime engine.',
      image: 'https://cdn.svgporn.com/logos/graphql.svg',
    },

    MongoDB: {
      text: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions. ',
      image: 'https://cdn.svgporn.com/logos/mongodb-icon.svg',
    },
    MySQL: {
      text: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius daughter My, and "SQL", the acronym for Structured Query Language.',
      image: 'https://cdn.svgporn.com/logos/mysql-icon.svg',
    },
    PostgreSQL: {
      text: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.',
      image: 'https://cdn.svgporn.com/logos/postgresql.svg',
    },

    Firebase: {
      text: 'Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server.',
      image: 'https://cdn.svgporn.com/logos/firebase.svg',
    },
    AWS: {
      text: 'Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Often times, clients will use this in combination with autoscaling.',
      image: 'https://cdn.svgporn.com/logos/aws.svg',
    },
    Heroku: {
      text: 'Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.',
      image: 'https://cdn.svgporn.com/logos/heroku-icon.svg',
    },
    Netlify: {
      text: 'Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.',
      image: 'https://cdn.svgporn.com/logos/netlify.svg',
    },
    Vercel: {
      text: 'Vercel Inc., formerly Zeit, is an American cloud platform as a service company. The company maintains the Next.js web development framework. Vercels architecture is built around Jamstack, and deployments are handled through Git repositories. Vercel is a member of the MACH Alliance.',
      image: 'https://cdn.svgporn.com/logos/vercel-icon.svg',
    },
    Docker: {
      text: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc.',
      image: 'https://cdn.svgporn.com/logos/docker-icon.svg',
    },
    Kubernetes: {
      text: 'Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management. Originally designed by Google, the project is now maintained by the Cloud Native Computing Foundation. The name Kubernetes originates from Greek, meaning "helmsman" or "pilot".',
      image: 'https://cdn.svgporn.com/logos/kubernetes.svg',
    },
    Solid: {
      text: 'Solid is a specification for building decentralized social applications. It is a set of conventions for data storage and interaction between users and applications. Solid is a W3C recommendation, and is being developed by the Solid Community Group.',
      image: 'https://cdn.svgporn.com/logos/solidjs-icon.svg',
    },
    Git: {
      text: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.',
      image: 'https://cdn.svgporn.com/logos/git-icon.svg',
    },
    GitHub: {
      text: 'GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.',
      image: 'https://cdn.svgporn.com/logos/github-icon.svg',
    },
    Go: {
      text: 'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. The compiler, tools, and source code are all free and open source.',
      image: 'https://cdn.svgporn.com/logos/gopher.svg',
    },
    Python: {
      text: 'Python is an interpreted, high-level, general-purpose programming language. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.',
      image: 'https://cdn.svgporn.com/logos/python.svg',
    },
    JavaScript: {
      text: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-className functions.',
      image: 'https://cdn.svgporn.com/logos/javascript.svg',
    },
    Java: {
      text: 'Java is a general-purpose programming language that is className-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
      image: 'https://cdn.svgporn.com/logos/java.svg',
    },
    C: {
      text: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
      image: 'https://cdn.svgporn.com/logos/c-plusplus.svg',
    },
    Rust: {
      text: 'Rust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but is designed to provide better memory safety while maintaining high performance.',
      image: 'https://cdn.svgporn.com/logos/rust.svg',
    },
    Swift: {
      text: 'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple’s Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products.',
      image: 'https://cdn.svgporn.com/logos/swift.svg',
    },
    CSharp: {
      text: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (className-based), and component-oriented programming disciplines.',
      image: 'https://cdn.svgporn.com/logos/c-sharp.svg',
    },
    PHP: {
      text: 'PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.',
      image: 'https://cdn.svgporn.com/logos/php.svg',
    },
    Ruby: {
      text: 'Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
      image: 'https://cdn.svgporn.com/logos/ruby.svg',
    },
    Kotlin: {
      text: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java className Library, but type inference allows its syntax to be more concise.',
      image: 'https://cdn.svgporn.com/logos/kotlin-icon.svg',
    },
    Perl: {
      text: 'Perl is a family of high-level, general-purpose, interpreted, dynamic programming languages. Perl is also used for system administration, network programming, GUI development, and more. Perl is free software, and is available under the GNU General Public License.',
      image: 'https://cdn.svgporn.com/logos/perl.svg',
    },
    Scala: {
      text: 'Scala is a general-purpose programming language providing support for functional programming and a strong static type system. Designed to be concise, many of Scalas design decisions aimed to address criticisms of Java.',
      image: 'https://cdn.svgporn.com/logos/scala.svg',
    },
    Vite: {
      text: 'Vite is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts: the dev server that provides rich feature enhancements over native ES modules, and a build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.',
      image: 'https://cdn.svgporn.com/logos/vitejs.svg',
    },
    Webpack: {
      text: 'Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.',
      image: 'https://cdn.svgporn.com/logos/webpack.svg',
    },
  }

  function handleDragEnd(event: any) {
    const { over, active } = event
    setParent(over ? active.id : null)
  }

  const draggableMarkup = (id: string) => (
    <Draggable id={id}>
      <img className="app__skillLogo mx-auto" src={skillMap[id].image} alt="" />
    </Draggable>
  )

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-sky-500 text-white shadow-2xl p-6">
        <h1 className="font-semibold text-2xl tracking-tight">Norbert Brett</h1>
        <div>
          <a
            className="inline-block text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-500 hover:bg-white mt-4 lg:mt-0"
            href="https://brett.vercel.app/"
          >
            About
          </a>
        </div>
      </nav>
      <div className="app xl:container m-auto px-6 md:px-12 bg-sky-100">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="py-16">
            <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
              <div>
                <h2 className="mt-4 text-center text-3xl font-bold text-gray-800  md:text-5xl">
                  Mini Tech Wicky
                </h2>
              </div>
              <div className="mt-16 ">
                {parent ? (
                  <p className="app__skillInstruction">
                    Click a logo to reset or drag another to view more
                    information
                  </p>
                ) : null}
              </div>
              <Droppable key={'abcdef'} id={'abcdef'}>
                {parent === null ? (
                  <div className="app__infoBox app__infoBox--inactive  mx-auto">
                    <h3>Click & Drag a logo here to display more info...</h3>
                  </div>
                ) : (
                  <div className="app__infoBox">
                    <img
                      className="w-[100px]"
                      src={skillMap[parent!].image}
                      alt=""
                    />
                    <h2 className="text-2xl text-sky-600 font-bold">
                      {parent}
                    </h2>
                    <q className="prose my-3">{skillMap[parent!].text}</q>
                  </div>
                )}
              </Droppable>
              <div className="mt-16 ">
                <div className="grid gap-y-8 gap-x-4 p-4 grid-cols-2 md:grid-cols-3 md:-mx-8 lg:grid-cols-4 rounded-3xl g-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 shadow-2xl shadow-gray-600/10">
                  {containers.map((id) =>
                    id !== parent ? draggableMarkup(id) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </DndContext>
      </div>
    </>
  )
}

export default App
