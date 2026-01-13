# Task: Update Problem.tsx with Better unDraw.co Illustrations

## Plan Summary
Replace the existing unDraw.co illustrations in Problem.tsx with more accurate illustrations that better represent each healthcare barrier concept.

## Current Issues
- Current illustrations are set to low opacity (opacity-15) as subtle backgrounds
- Some illustrations don't optimally match their barrier concepts
- Opportunity to enhance visual impact while maintaining professional appearance

## Selected unDraw.co Illustrations (Final - Updated to Local SVGs)
| Barrier | Illustration File | Concept |
|---------|-------------------|---------|
| Fragmented Care | `fragmented-care.svg` | Disconnected/siloed systems |
| Financial Barriers | `financial-barriers.svg` | Financial/cost challenges |
| Limited Access | `limited-access.svg` | Distance and access barriers |

## Implementation Steps

### Step 1: Update Problem.tsx (COMPLETED)
- [x] Replace external unDraw.co URLs with local SVG files
- [x] Fragmented Care: `/illustrations/fragmented-care.svg`
- [x] Financial Barriers: `/illustrations/financial-barriers.svg`
- [x] Limited Access: `/illustrations/limited-access.svg`

### Step 2: Create Local SVG Illustrations (COMPLETED)
- [x] Created `public/illustrations/` directory
- [x] Created custom `fragmented-care.svg` showing Hospital, Pharmacy, Lab with broken connections
- [x] Created custom `financial-barriers.svg` showing high costs and expenses
- [x] Created custom `limited-access.svg` showing distance between patient and hospital

### Step 3: Redesign Card Layout for Full Visibility
- [x] Remove absolute positioning overlay approach
- [x] Create prominent illustration sections (h-64) at top of each card
- [x] Add gradient backgrounds for visual appeal
- [x] Display illustrations with proper object-contain sizing
- [x] Move icons inline with titles for better hierarchy
- [x] Improve barrier descriptions for clarity

## Expected Outcome
- More visually impactful barrier illustrations
- Better conceptual alignment between visuals and barrier descriptions
- Enhanced professional appearance with improved illustration visibility

## Technical Details
- File: `src/components/Problem.tsx`
- No structural changes to component architecture
- Only image URLs and opacity values will be modified
- All existing animations and interactions preserved

