# ==============================================================================
# ENAC GSEA — SEMESTER 2 PROMOTION & ADMIN SETUP FORM (TEMPLATE)
# ==============================================================================
# Copy this file to `PROMO_SETUP.private.md` (which is ignored by Git) and fill
# in your promotion details, teacher names, weekly dates/rooms, and student lists.
# Then type "Semester 2 Update" in the chat (or run `npm run promo:update`).
#
# NOTE ON SESSION TITLES:
# Session titles are pulled AUTOMATICALLY from the live course deck (`src/js/02-config.js`)
# using the Deck Card ID (e.g., `M1.S1`, `M1.S2`, `M1.FE1`, `M2.S1` ...).
# ==============================================================================

PROMOTION: GSEA 26A
SEMESTER: 2
ACADEMIC_YEAR: 2026-2027
TOTAL_STUDENTS: 19
NUMBER_OF_GROUPS: 2

GROUP_A_COUNT: 10
GROUP_B_COUNT: 9
GROUP_C_COUNT: 0
GROUP_D_COUNT: 0

# ------------------------------------------------------------------------------
# TRACK 1: GENERAL ENGLISH (AG • LV102E — 8 WEEKS)
# ------------------------------------------------------------------------------
[TRACK: AG]
COURSE_CODE: LV102E
COURSE_NAME: General English (AG)
TOTAL_WEEKS: 8
SCHEDULE_SUMMARY: Fridays 08h00 – 10h00

GROUP_A_TEACHER: Teacher A (TBC)
GROUP_B_TEACHER: Teacher B (TBC)
GROUP_C_TEACHER: Teacher C (TBC)
GROUP_D_TEACHER: Teacher D (TBC)

GROUP_A_SLOT: Friday 08h00 - 10h00
GROUP_B_SLOT: Friday 08h00 - 10h00
GROUP_C_SLOT: Friday 08h00 - 10h00
GROUP_D_SLOT: Friday 08h00 - 10h00

# ------------------------------------------------------------------------------
# TRACK 2: AERONAUTICAL ENGLISH (AAS • LV122E — 8 WEEKS)
# ------------------------------------------------------------------------------
[TRACK: AAS]
COURSE_CODE: LV122E
COURSE_NAME: Aeronautical English (AAS)
TOTAL_WEEKS: 8
SCHEDULE_SUMMARY: Wednesdays 13h15 – 15h15

GROUP_A_TEACHER: Teacher A (TBC)
GROUP_B_TEACHER: Teacher B (TBC)
GROUP_C_TEACHER: Teacher C (TBC)
GROUP_D_TEACHER: Teacher D (TBC)

GROUP_A_SLOT: Wednesday 13h15 - 15h15
GROUP_B_SLOT: Wednesday 13h15 - 15h15
GROUP_C_SLOT: Wednesday 13h15 - 15h15
GROUP_D_SLOT: Wednesday 13h15 - 15h15

# ------------------------------------------------------------------------------
# AG WEEKLY ROOMS & DATES (LV102E — 8 Weeks)
# Format: CourseWk | CalWk | Date | DeckCard | GrpA_Room | GrpB_Room | GrpC_Room | GrpD_Room
# Use `HOLIDAY | Label` for vacation breaks. Leave room as `-` or `TBC` to hide badge.
# ------------------------------------------------------------------------------
[AG WEEKLY ROOMS & DATES]
W01 | W06 | Fri 12 Feb | M1.S1  | - | - | - | -
W02 | W07 | Fri 19 Feb | M1.S2  | - | - | - | -
HOLIDAY | Winter Break (No Classes)
W03 | W10 | Fri 12 Mar | M1.S3  | - | - | - | -
W04 | W11 | Fri 19 Mar | M1.FE1 | - | - | - | -
W05 | W12 | Fri 26 Mar | M2.S1  | - | - | - | -
W06 | W13 | Fri 02 Apr | M2.S2  | - | - | - | -
W07 | W14 | Fri 09 Apr | M2.S3  | - | - | - | -
HOLIDAY | Spring Break (No Classes)
W08 | W17 | Fri 30 Apr | M2.FE2 | - | - | - | -

# ------------------------------------------------------------------------------
# AAS WEEKLY ROOMS & DATES (LV122E — 8 Weeks)
# Format: CourseWk | CalWk | Date | DeckCard | GrpA_Room | GrpB_Room | GrpC_Room | GrpD_Room
# ------------------------------------------------------------------------------
[AAS WEEKLY ROOMS & DATES]
W01 | W06 | Wed 10 Feb | M1.S1  | - | - | - | -
W02 | W07 | Wed 17 Feb | M1.S2  | - | - | - | -
HOLIDAY | Winter Break (No Classes)
W03 | W10 | Wed 10 Mar | M1.S3  | - | - | - | -
W04 | W11 | Wed 17 Mar | M1.FE1 | - | - | - | -
W05 | W12 | Wed 24 Mar | M2.S1  | - | - | - | -
W06 | W13 | Wed 31 Mar | M2.S2  | - | - | - | -
W07 | W14 | Wed 07 Apr | M2.S3  | - | - | - | -
HOLIDAY | Spring Break (No Classes)
W08 | W17 | Wed 28 Apr | M2.FE2 | - | - | - | -

# ------------------------------------------------------------------------------
# STUDENT ROSTERS (One student per line: `LASTNAME Firstname`)
# ------------------------------------------------------------------------------
[GROUP A STUDENTS]
1. LASTNAME Firstname
2. LASTNAME Firstname
3. LASTNAME Firstname
4. LASTNAME Firstname
5. LASTNAME Firstname
6. LASTNAME Firstname
7. LASTNAME Firstname
8. LASTNAME Firstname
9. LASTNAME Firstname
10. LASTNAME Firstname

[GROUP B STUDENTS]
1. LASTNAME Firstname
2. LASTNAME Firstname
3. LASTNAME Firstname
4. LASTNAME Firstname
5. LASTNAME Firstname
6. LASTNAME Firstname
7. LASTNAME Firstname
8. LASTNAME Firstname
9. LASTNAME Firstname

[GROUP C STUDENTS]

[GROUP D STUDENTS]

