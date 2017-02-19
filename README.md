# mackie-drew-site
My personal portfolio site built in React.

Should be located at http://mackiedrew.com/

# Technologies

1. React
2. Babel (ES6, ES7)
3. Webpack
4. SASS
5. Jest
6. Enzyme
7. EsLintpre
8. GitHub Pages
9. Bootstrap 4

# Need adding

# Plan

  ## Design

- Navbar
  - Full width box
  - Container width margined contents
  - collapses to be a drop down at < md size
- Content
  - Social Buttons in a row
  - Portfolio
  - Timeline
  - Contact
  - Copyright notice

  ## Behavior

  - Links structured as: mackiedrew.com/#Portfolio simply scroll to portfolio section
  - Links structured as: mackiedrew.com/portfolio or mackiedrew.com/Portfolio are 
  direct links which will show just that section.
  - Sections always shown: Navbar, Social Buttons, Contact, Copyright Notice
  - Routes:
    - /
    - /portfolio or /Portfolio
      - /portfolio/[item_name]
      - /portfolio/[item_id]
      - /portfolio/[tag]
    - /timeline or /TimeLine or /Timeline
      - /timeline/[date]
      - /timeline/[item_id]
      - /timeline/[tag]