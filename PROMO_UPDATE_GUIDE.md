# ENAC GSEA Semester 2 — Promotion & Course Admin Update Guide

This guide explains how to update all **Course Admin** pages, **Student Rosters**, **Weekly Timetables & Rooms**, and **FE Tutorial Rotas** across Semester 2 in one step—while keeping real student names 100% private and leaving all lesson content untouched.

---

## 1. Where to Edit Your Cohort Details

Open **[`PROMO_SETUP.private.md`](file:///Users/philparris/Documents/GSEA_semester_2/PROMO_SETUP.private.md)** in the root of `GSEA_semester_2`.

> **Privacy Guarantee**: `PROMO_SETUP.private.md` and `students.private.json` are permanently listed in `.gitignore`. Real student names never leave your Mac or go to GitHub; they are injected strictly into `dist/GSEA_Semester_2_SCORM_MOODLE.zip` and the offline `.iso` / `.dmg` packages.

---

## 2. What You Can Configure in `PROMO_SETUP.private.md`

1. **Promotion & Group Scaling (`1` to `4` Groups)**:
   - `PROMOTION`: e.g. `GSEA 26A`
   - `NUMBER_OF_GROUPS`: `1`, `2`, `3`, or `4` (`Group A` through `Group D`)
   - `GROUP_A_COUNT` .. `GROUP_D_COUNT`: Supports 6 to 12+ students per group with pre-verified fair Pair/Trio FE rotation matrices (`6 -> 3 Pairs`, `7 -> 2 Pairs + 1 Trio`, `8 -> 4 Pairs`, `9 -> 3 Pairs + 1 Trio`, `10 -> 2 Pairs + 2 Trios`, `11 -> 1 Pair + 3 Trios`, `12 -> 4 Trios`).
2. **Tracks & Teachers (`[TRACK: AG]` & `[TRACK: AAS]`)**:
   - Semester 2 runs **8 weeks of General English (`AG • LV102E`)** and **8 weeks of Aeronautical English (`AAS • LV122E`)**.
   - Enter teacher names and weekly 2-hour slots per group. The 4 x 30-minute FE tutorial timeslots are computed automatically from each group's weekly slot.
3. **Weekly Dates & Room Numbers (`[AG WEEKLY ROOMS & DATES]` & `[AAS WEEKLY ROOMS & DATES]`)**:
   - Each row maps a course week (`W01`–`W08`) and calendar week to a **Deck Card ID** (`M1.S1`, `M1.S2`, `M1.S3`, `M1.FE1`, `M2.S1`, `M2.S2`, `M2.S3`, `M2.FE2`).
   - Session titles are pulled **automatically** from [`src/js/02-config.js`](file:///Users/philparris/Documents/GSEA_semester_2/src/js/02-config.js).
   - If a room is `-` or `TBC`, no room badge is shown; once you enter a room (e.g. `E102`), a clean room badge appears automatically.
4. **Student Lists (`[GROUP A STUDENTS]` .. `[GROUP D STUDENTS]`)**:
   - Paste your student names (`LASTNAME Firstname`) under each active group.

---

## 3. How to Trigger the Update

Once you save `PROMO_SETUP.private.md`:

- **Option A (In AI Chat)**: Simply type:
  ```text
  Semester 2 Update
  ```
  The assistant will run `npm run promo:update`, rebuild all 4 packages (`SCORM.zip`, `SCORM_MOODLE.zip`, `.iso`, `.dmg`), and automatically commit & push the anonymized changes to GitHub.

- **Option B (In Terminal)**:
  ```bash
  npm run promo:update
  ```

