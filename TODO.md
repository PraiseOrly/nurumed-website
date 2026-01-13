# TODO: Conditions Dropdown Implementation

## Plan Summary
Create a dropdown menu for "Conditions" with 4 options that link to sections within the Conditions.tsx page:
- Cardiovascular Health → #cardiovascular-health
- Metabolic Disorders → #metabolic-disorders
- Respiratory Conditions → #respiratory-conditions
- Mental & Neurological Health → #mental-neurological-health

## Tasks

### 1. Update Header.tsx
- [x] Add `isConditionsDropdownOpen` state variable
- [x] Add conditions dropdown data array with 4 conditions
- [x] Replace "Conditions" link with dropdown menu in desktop navigation
- [x] Add mobile menu support for Conditions dropdown
- [x] Style the dropdown consistently with the existing Products dropdown

### 2. Update Conditions.tsx
- [x] Create section for Cardiovascular Health with id="cardiovascular-health"
- [x] Create section for Metabolic Disorders with id="metabolic-disorders"
- [x] Create section for Respiratory Conditions with id="respiratory-conditions"
- [x] Create section for Mental & Neurological Health with id="mental-neurological-health"

## Implementation Notes
- Follow the same pattern as the existing Products dropdown
- Use the same styling and animation from framer-motion
- Ensure mobile responsiveness
- Maintain consistent color scheme and hover states

