<!-- Introduction Text -->
<div align="center">
    <h1>Take-Home Assaignment</h1>
    <h3>React app fetching data from API <br> endpoint & handeling JSON Data <h3>
    <h3> 
      <a href='', target='_blank'>
        <h5>live demo</h5>
      <a/>
    </h3>
        <h6>
            built with <a href="https://vitejs.dev/" >Vite</a> &
            hosted by <a href="https://vercel.com/">Vercel</a> 
        </h6>
</div>

---

<h3 align='center'>
Tech Used in this Project
<h3>
<p align='center'>
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=vite,ts,tailwind" /><br>
        <img src="https://vitest.dev/logo.svg" width=50 alt="Next-Auth">
        <img src="https://skillicons.dev/icons?i=vercel,github" />
    </a>
</p>

---

<!-- DEMO IMAGE  -->
<div align=center>
    <img src="/src/assets/github/FlipDish-Demo-Desktop.png" alt="Demo-Desktop" title="DemoImage-home" width="600" height="400"> 
    <img src="/src/assets//github//FlipDish-Demo-Mobile.png" alt="Demo-DemoMobile" title="DemoImage-login" width="300" height="500">    
</div>
<br>

<!-- -------------------------------------------------------------------------- -->

<h1 align='center'> Welcome & Introductory </h1>

<!-- -------------------------------------------------------------------------- -->
<hr/>

### Introduction:
<hr/>
<!-- -------------------------------------------------------------------------- -->
Despite a hectic schedule, I took on the challenge of developing a React-based solution to render Flipdish restaurant menus. 
This project was part of a time-constrained technical assessment, I spent approximetely between 5/6 hours in total on this assessment. 

Leveraging modern technologies including React, Typescript, and Tailwind CSS, I prioritized delivering essential functionality while ensuring clean, scalable code. You can explore my development journey through detailed comments on commits 

<h4><strong>⚠ Note for reviewer: </strong> </h4> 

You can find more information on my thought process - [here](https://github.com/DevonGifford/Menu--TechnicalAssignment#-development-thoughts-)
<br>You can find open issues and future enhancements - [here](https://github.com/DevonGifford/Menu--TechnicalAssignment#-known-issues--potential-improvements--)  <br/>  Please feel free to ignore the simple code in the `src/components/ui` folder
<br/>

<!-- -------------------------------------------------------------------------- -->
<br>
<hr>

### 🔑 Key-Required Features of this project:
<hr>
<!-- -------------------------------------------------------------------------- -->

##### REQUIRED FEATURES: 

#### React-based solution to render the menu in a browser:

✅  Renders full menu with the variouse categories as well as individual menu items

✅  Individual menu item's include:  name, image, description & price <em>( if available... )</em>

✅  Web app is fully Mobile/User-friendly and responsive.

<br>

#### Read and understand the structure of the Flipdish menu data object:

✅  Fetch and handle data from API endpoint  

✅  Products with `isMasterOptionSet` set to true should be standalone products

✅  Ignores `MenuSectionItem` when `isMasterOptionSet` is true

</br>

##### STRETCH FEATURES: 

✅  Polished UI - interactive w/ Loading elements (hover effects, transitions, animations)

✅  Unit/integration testing with vitests and RTL.

✅  Navigation controls for users to easily navigate to the top of the menu.

</br>
</br>
<!-- -------------------------------------------------------------------------- -->
<hr>
<h1 align='left'> Known issues & potential improvements: 🎯 </h1>
<hr>

<!-- -------------------------------------------------------------------------- -->
<!-- Small container -->
<details>
<summary> Click here to expand</summary>
<br/>

#### Known issues & Things I didn't have time for: 

- [Prioritize Above-the-Fold Loading with Suspense and Lazy Loading](https://github.com/DevonGifford/Menu--TechnicalAssignment/issues/5)

- [Enhanced Loading and Placeholder Handling](https://github.com/DevonGifford/Menu--TechnicalAssignment/issues/4)

- [Accessibility Enhancements for Improved User Experience](https://github.com/DevonGifford/Menu--TechnicalAssignment/issues/3)

- [Refactor MenuItemCard UI (Particularly Mobile View)](https://github.com/DevonGifford/Menu--TechnicalAssignment/issues/2)

- [Product Images Not Sizing Uniformly with Screen Resizing ](https://github.com/DevonGifford/Menu--TechnicalAssignment/issues/1)
</br>

#### Future Features & Improvements: 

💥  Include a feature to filter or search for specific menu items or sections.

💥  Include a shopping cart functionality to allow users to add items for ordering.

💥  Implement a feature for users to customize menu items (e.g., select options, add extras).

💥  Integrate with a backend or API for real-time updates or ordering functionality.

<!-- CLOSING DIV -->
</details>
<!-- SECTION CLOSING DIV -->
</details>
<br><br>


<!-- -------------------------------------------------------------------------- -->

<hr>
<h1 align='left'> Development Thoughts 🤔</h1>
<hr>

<!-- -------------------------------------------------------------------------- -->
<details>
<summary> Click here to expand </summary>
<br/>

#### [Commit #1](https://github.com/DevonGifford/Menu--TechnicalAssignment/commit/463c5d343ec247f0c052e9ef66fdc5b55cd65567#comments) - Thought Process on Tooling


#### [Commit #2](https://github.com/DevonGifford/Menu--TechnicalAssignment/commit/89c78428dba057434fdfdf81951b22cff1e6bab2#comments) - Quick Prototype & Hosting 


#### [Commit #3](https://github.com/DevonGifford/Menu--TechnicalAssignment/commit/185e24303c7c7c81fe4c6913c503b0aebd348fd6#comments) - Cleaned up Prototype & hitting key requirement's


#### [Commit #4](https://github.com/DevonGifford/Menu--TechnicalAssignment/commit/84c1cc639f1889943714c34e646bda475ffa074b#comments) - Testing completed and some final improvements


#### [Commit #5](https://github.com/DevonGifford/Menu--TechnicalAssignment/commit/f1458cdfc1da1d62a51dc5852f1c43b06d38835d#comments) - Final Clean up 
 

<br/>
---
<!-- CLOSING DIV -->
</details>
<br><br>
<!-- -------------------------------------------------------------------------- -->
<hr>
<h1 align='left'> Testing Results 🧪</h1>
<hr>
<!-- -------------------------------------------------------------------------- -->
<details>
<summary> Click here to expand </summary>
<br/>

<img src="./src/assets/github/CodeCoverage-flipdish.png" alt="Demo-Testing" title="DemoImage-Testing" width="700" height="500"> 

<!-- CLOSING DIV -->
</details>

<br><br>

