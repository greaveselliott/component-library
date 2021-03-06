# Backlog

- [x] Fork my personal component starter repo containing initial storybook, typescript, build, GitHub Actions
- [x] Splice design into components
- [x] Export static assets

  - [x] Icons
  - [x] Brand assets
  - [x] Fonts
  - [x] Colours

- [ ] Builds Components

  - [x] Atoms

    - [x] Typography
      - [x] H1
      - [x] H2
      - [x] H3
      - [x] Small
    - [x] Icon Small
    - [x] Icon Large
    - [x] Tag
    - [x] Button
    - [x] Forms
      - [x] Label
      - [x] Checkbox
      - [x] Input field
    - [x] CompanyLogo
    - [x] Image

  - [x] Molecule

    - [x] Bullet Layout
    - [x] Search

  - [ ] Organism
    - [x] Accordian
    - [x] Sidebar
    - [x] Header
    - [x] Card
    - [x] Page

- [x] Assemble page
- [ ] Fix all project linting errors
- [ ] Add visual regression tests
- [ ] Add Storybook Accessibility extension
- [ ] Remove FontAwesome dependency, in favor of explicit Icon component
      **Why remove FontAwesome?**
  1. Performance: FontAwesome comes with hundreds of icons most of which will be unusued (wasted file size)
  2. A smaller prescriptive icon set is more useful than a large icon set without any guidance.
- [ ] Move test script from component library package to root.
- [ ] Add component API documentation to story, using https://www.npmjs.com/package/@storybook/addon-docs
- [ ] Use FontAwesome Pro icons instead of the free versions
- [ ] Refactor AppShell and Document component
- [ ] Add missing unit tests
- [ ] Clean up types, the hack, importing types directly from a file is breaking some of the unit tests.
