# CSS Grid

## Definition
CSS Grid is a two-dimensional layout system in CSS used to create complex and responsive web layouts. It allows you to arrange elements in rows and columns easily.

---

![axis](/CSS/Grid/images/axis.png)

## Container Properties

To start using Grid, you apply `display: grid` to a container.

```css
.container {
  display: grid;
}
```




# Difference Between CSS Grid and Flexbox

CSS Grid and Flexbox are both CSS layout systems, but they are designed for different use cases. Here’s a clear comparison:

---

## 1. Layout Dimension

| Feature           | Flexbox                       | Grid                          |
|------------------|--------------------------------|-------------------------------|
| Dimension        | 1-dimensional (row **or** column) | 2-dimensional (rows **and** columns) |

- **Flexbox** is ideal for arranging items in a **single row or a single column**.
- **Grid** is ideal for **complex layouts** involving both rows and columns simultaneously.

---

## 2. Container vs Items Focus

| Feature           | Flexbox                      | Grid                          |
|------------------|-------------------------------|-------------------------------|
| Main focus       | Items alignment and spacing   | Overall layout structure (cells, rows, columns) |

- Flexbox works primarily with **flex items** inside a container.
- Grid defines a **grid structure** and places items into it.

---

## 3. Alignment and Distribution

| Feature           | Flexbox                      | Grid                          |
|------------------|-------------------------------|-------------------------------|
| Alignment        | justify-content, align-items  | justify-items, align-items, justify-content, align-content |
| Spacing          | Space between, around, evenly | Space between rows/columns, flexible area distribution |

- Both support alignment, but **Grid offers more control over both axes simultaneously**.

---

## 4. Use Case Examples

- **Flexbox**
  - Navigation menus
  - Buttons in a row
  - Small components or single-dimensional layouts

- **Grid**
  - Web page main layout
  - Complex galleries
  - Dashboard layouts

---

## 5. Overlapping and Positioning

- **Flexbox**: Items cannot overlap easily; it’s mainly linear flow.
- **Grid**: Items can span multiple rows/columns and **overlap**.

---

## 6. Responsive Design

- **Flexbox**: Easier for linear, simple responsive adjustments.
- **Grid**: Better for entire page layouts, with **media queries** to restructure the grid.

---

## Quick Summary

| Feature          | Flexbox                        | Grid                          |
|-----------------|--------------------------------|-------------------------------|
| Dimension       | 1D (row or column)             | 2D (rows and columns)         |
| Best for        | Component layout               | Page or large layout          |
| Alignment       | Single axis                    | Both axes                      |
| Overlap items   | ❌                              | ✅                             |
| Complexity      | Simple                          | Complex                        |
| Responsive      | Easy for small layouts         | Ideal for full layouts        |

---

**Tip:**  
- Use **Flexbox** for small UI components or simple layouts.  
- Use **Grid** when the page layout requires both rows and columns.  
- They can also be **combined**: Grid for the page structure and Flexbox for internal alignment.

----
Ah! I see what you mean — you want the **entire note fully formatted in Markdown**, ready to copy, without splitting or partial code blocks. Here’s the complete CSS Grid note for **lines, tracks, areas, and cells** in proper Markdown:

````markdown
# CSS Grid: Lines, Tracks, Areas, and Cells

CSS Grid organizes content into a structured layout using **lines, tracks, areas, and cells**. Understanding these terms is key to mastering Grid.

---

## 1. Grid Lines

**Definition:**  
Grid lines are the lines that divide the grid into rows and columns. They are numbered, starting from **1** at the top/left.  

- **Vertical lines** → divide columns  
- **Horizontal lines** → divide rows  

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px; /* 4 vertical lines: 1,2,3,4 */
  grid-template-rows: 50px 100px;           /* 3 horizontal lines: 1,2,3 */
}
````

* You can reference lines when positioning items:

```css
.item {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

---

## 2. Grid Tracks

**Definition:**
A grid track is the **space between two adjacent grid lines**. In other words, **columns and rows are tracks**.

* **Columns** → vertical tracks
* **Rows** → horizontal tracks

```css
.container {
  grid-template-columns: 1fr 2fr 1fr; /* 3 column tracks */
  grid-template-rows: 100px auto;     /* 2 row tracks */
}
```

---

## 3. Grid Areas

**Definition:**
A grid area is a **rectangular space** formed by four grid lines (two vertical and two horizontal). You can **name an area** to place items easily.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

* **Grid area** is useful for semantic and readable layouts.

---

## 4. Grid Cells

**Definition:**
A grid cell is the **smallest unit of the grid**, formed by the intersection of a **row track and a column track**.

* Each cell is like a "box" where a single grid item can be placed.
* Grid items can occupy **one cell** or **span multiple cells**.

```css
.item {
  grid-column: 1 / 3; /* spans 2 columns */
  grid-row: 1 / 2;    /* spans 1 row */
}
```

---

## Summary

| Term           | Definition                                                                     |
| -------------- | ------------------------------------------------------------------------------ |
| **Grid Line**  | Line separating rows or columns, numbered for positioning.                     |
| **Grid Track** | Space between two adjacent grid lines; a row or a column.                      |
| **Grid Area**  | Rectangular space formed by four lines; can be named for easy placement.       |
| **Grid Cell**  | Smallest unit of the grid; intersection of one row track and one column track. |

---

**Tip:**
Think of CSS Grid like a **spreadsheet**:

* **Lines** → row & column lines
* **Tracks** → rows and columns themselves
* **Cells** → individual boxes
* **Areas** → merged ranges of cells

```


Perfect! You want a **complete CSS Grid properties note** in Markdown covering **all the main container and item properties** you listed. Here’s a fully structured note:

````markdown id="css-grid-properties"
# CSS Grid Properties

CSS Grid has **container properties** and **item properties** to control layout, alignment, spacing, and placement.  

---

## 1. Grid Container Properties

These properties are applied to the **grid container**.

### a) Grid Structure
- **grid-template-columns**: Defines the number and size of **columns**.
```css
.container {
  grid-template-columns: 100px 1fr 2fr;
}
````

* **grid-template-rows**: Defines the number and size of **rows**.

```css
.container {
  grid-template-rows: 50px auto 100px;
}
```

* **grid-template-areas**: Names grid areas for semantic placement.

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

* **grid-template**: Shorthand for rows, columns, and areas.

```css
.container {
  grid-template: 
    "header header" 50px
    "sidebar main" auto
    "footer footer" 30px /
    1fr 2fr;
}
```

---

### b) Gap and Spacing

* **grid-column-gap** / **column-gap**: Space between columns.

```css
.container { column-gap: 20px; }
```

* **grid-row-gap** / **row-gap**: Space between rows.

```css
.container { row-gap: 15px; }
```

* **grid-gap** / **gap**: Shorthand for row and column gaps.

```css
.container { gap: 10px 20px; } /* row-gap column-gap */
```

---

### c) Alignment

* **justify-content**: Aligns the grid **horizontally** within container.

```css
.container { justify-content: center; }
```

* **align-items**: Aligns **grid items** along rows (vertically by default).

```css
.container { align-items: start; }
```

* **justify-items**: Aligns **grid items** along columns (horizontally).

```css
.container { justify-items: end; }
```

* **place-items**: Shorthand for `align-items` + `justify-items`.

```css
.container { place-items: center stretch; }
```

* **align-content**: Aligns **entire grid** vertically inside container.

```css
.container { align-content: space-between; }
```

* **place-content**: Shorthand for `align-content` + `justify-content`.

```css
.container { place-content: center stretch; }
```

---

### d) Auto Tracks

* **grid-auto-columns**: Width of **implicitly created columns**.

```css
.container { grid-auto-columns: 100px; }
```

* **grid-auto-rows**: Height of **implicitly created rows**.

```css
.container { grid-auto-rows: 50px; }
```

* **grid-auto-flow**: Controls placement of **auto-generated items**.

```css
.container { grid-auto-flow: row; } /* row | column | dense */
```

* **grid**: Shorthand for all grid-template, auto-tracks, and areas.

```css
.container {
  grid: 
    "header header" 50px
    "sidebar main" auto
    "footer footer" 30px /
    1fr 2fr;
  gap: 10px;
}
```

---

## 2. Grid Item Properties

These properties are applied to **individual grid items**.

### a) Positioning Items

* **grid-column-start / grid-column-end**

```css
.item {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

* **grid-row-start / grid-row-end**

```css
.item {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

* **grid-column / grid-row**: Shorthand for start / end.

```css
.item {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

* **grid-area**: Can specify **grid-area name** or start/end positions.

```css
.item {
  grid-area: sidebar; /* named area from grid-template-areas */
  /* or positions */
  grid-area: 2 / 1 / 4 / 3; /* row-start / column-start / row-end / column-end */
}
```

---

### b) Alignment of Individual Items

* **justify-self**: Horizontal alignment inside its cell.

```css
.item { justify-self: center; } /* start | center | end | stretch */
```

* **align-self**: Vertical alignment inside its cell.

```css
.item { align-self: end; } /* start | center | end | stretch */
```

* **place-self**: Shorthand for `align-self` + `justify-self`.

```css
.item { place-self: center stretch; }
```

---

## ✅ Summary

| Property                | Type      | Description                                |
| ----------------------- | --------- | ------------------------------------------ |
| `grid-template-columns` | Container | Define column structure                    |
| `grid-template-rows`    | Container | Define row structure                       |
| `grid-template-areas`   | Container | Assign named areas                         |
| `grid-template`         | Container | Shorthand for rows, columns, and areas     |
| `grid-column-gap`       | Container | Gap between columns                        |
| `grid-row-gap`          | Container | Gap between rows                           |
| `grid-gap`              | Container | Shorthand for row & column gaps            |
| `justify-items`         | Container | Align items horizontally in cells          |
| `align-items`           | Container | Align items vertically in cells            |
| `place-items`           | Container | Shorthand: align-items + justify-items     |
| `justify-content`       | Container | Align entire grid horizontally             |
| `align-content`         | Container | Align entire grid vertically               |
| `place-content`         | Container | Shorthand: align-content + justify-content |
| `grid-auto-columns`     | Container | Width of auto-created columns              |
| `grid-auto-rows`        | Container | Height of auto-created rows                |
| `grid-auto-flow`        | Container | How auto-placed items are arranged         |
| `grid`                  | Container | Shorthand for all grid properties          |
| `grid-column-start`     | Item      | Start line for column                      |
| `grid-column-end`       | Item      | End line for column                        |
| `grid-row-start`        | Item      | Start line for row                         |
| `grid-row-end`          | Item      | End line for row                           |
| `grid-column`           | Item      | Shorthand: column start / end              |
| `grid-row`              | Item      | Shorthand: row start / end                 |
| `grid-area`             | Item      | Place in named area or start/end positions |
| `justify-self`          | Item      | Align item horizontally in its cell        |
| `align-self`            | Item      | Align item vertically in its cell          |
| `place-self`            | Item      | Shorthand: align-self + justify-self       |

----

----
# CSS Grid: `grid-template-columns`

## Definition
The `grid-template-columns` property defines the **number and width of columns** in a CSS Grid container. It determines the **grid structure horizontally**.

---

## Syntax
```css
.container {
  grid-template-columns: <track-size> <track-size> ...;
}
````

* `<track-size>` can be:

  * **Length**: `px`, `em`, `rem` (e.g., `200px`)
  * **Percentage**: relative to container width (e.g., `50%`)
  * **Fraction (`fr`)**: flexible portion of available space (e.g., `1fr`)
  * **auto**: size based on content
  * **minmax(min, max)**: min and max sizes for a column
  * **repeat()**: repeat a column pattern

---

## Examples

### 1. Fixed width columns

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 150px;
}
```

* Creates **3 columns** with fixed widths.

### 2. Flexible columns using `fr`

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

* Total space is divided into **4 parts**: first and last columns 1 part each, middle column 2 parts.

### 3. Auto columns

```css
.container {
  display: grid;
  grid-template-columns: auto auto auto;
}
```

* Each column width is **determined by content size**.

### 4. Using `repeat()`

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
```

* Creates **4 equal-width columns** automatically.

### 5. Using `minmax()`

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
}
```

* Each column is **at least 100px** but can grow to **1 fraction of remaining space**.

---

## Important Notes

* Only defines **columns**; use `grid-template-rows` for rows.
* Combine with **gap** for spacing between columns.
* Flexible units (`fr`) are best for **responsive layouts**.
* Works together with **grid items’ column placement** (`grid-column` or `grid-area`).

---

## Example Layout

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
  gap: 10px;
}

.item1 { grid-column: 1; }
.item2 { grid-column: 2; }
.item3 { grid-column: 3; }
```

* Creates 3 columns with different widths.
* Items are placed in each column.




You're right. Here's a beginner-friendly note:

---

# CSS Grid

## What is CSS Grid?

Grid is a way to arrange items on a page in **rows and columns** — like a table, but way more flexible. You apply it to a **parent (container)**, and it controls how the **children (items)** inside it are laid out.

---

## Step 1 — Turn on Grid

```css
.container {
  display: grid;
}
```

That's it. Now the container is a grid. Nothing visible changes yet — you need to define columns.

---

## Step 2 — Define Columns

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

This creates **3 columns**, each 200px wide. If you have 6 items, they'll automatically wrap into 2 rows.

---

## The `fr` Unit (fraction)

Instead of fixed px, you can use `fr` — it means "take a fraction of the available space."

```css
grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
grid-template-columns: 1fr 2fr;      /* left gets 1/3, right gets 2/3 */
grid-template-columns: 200px 1fr;    /* left is fixed, right fills the rest */
```

Think of `fr` like slicing a pizza — `1fr 1fr` = two equal slices, `1fr 2fr` = one small, one double.

---

## `repeat()` — Less Typing

```css
grid-template-columns: repeat(3, 1fr);
/* same as: 1fr 1fr 1fr */

grid-template-columns: repeat(4, 200px);
/* same as: 200px 200px 200px 200px */
```

---

## Gap — Space Between Items

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;        /* space between all rows and columns */
  gap: 8px 24px;    /* row-gap  column-gap */
}
```

---

## Rows

By default, rows are created **automatically** and sized to fit content. You can define them manually too:

```css
grid-template-rows: 100px auto 200px;
```

But most beginners don't need this — columns are the main thing you define.

---

## Aligning Items Inside Cells

Each item sits inside a "cell." You can control how it sits:

```css
.container {
  align-items: center;    /* vertical: top | center | end | stretch */
  justify-items: center;  /* horizontal: start | center | end | stretch */
}
```

`stretch` is the default — items fill their entire cell.

---

## Making an Item Span Multiple Columns

```css
.item {
  grid-column: span 2;  /* this item takes up 2 columns */
  grid-row: span 2;     /* this item takes up 2 rows */
}
```

---

## Responsive Grid (No Media Queries!)

```css
grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
```

This means: *"create as many columns as fit, each at least 160px wide, share remaining space equally."* Items automatically wrap to the next row when the screen is small.

---

## Named Areas — The Clearest Way to Build a Layout

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

You literally draw the layout with words. Very readable.

---

## Quick Reference Cheat Sheet

| What you want | Property |
|---|---|
| Turn on grid | `display: grid` |
| Define columns | `grid-template-columns` |
| Define rows | `grid-template-rows` |
| Space between items | `gap` |
| Item spans 2 cols | `grid-column: span 2` |
| Center items vertically | `align-items: center` |
| Center items horizontally | `justify-items: center` |
| Responsive columns | `repeat(auto-fit, minmax(Xpx, 1fr))` |
| Named layout | `grid-template-areas` |


![gridvs.flexbox](/CSS/Grid/images/gridvs.flexbox.png)

## CSS Grid — `gap`

`gap` controls the space **between** grid items (not outside the container).

---

### Basic Usage

```css
.container {
  display: grid;
  gap: 16px; /* same space between rows AND columns */
}
```

---

### Row and Column Separately

```css
gap: 8px 24px;
/* first value = row gap (vertical) */
/* second value = column gap (horizontal) */
```

Or use the long form:

```css
row-gap: 8px;       /* space between rows (vertical space) */
column-gap: 24px;   /* space between columns (horizontal space) */
```

---

### Visual Example

```
         column-gap (horizontal)
              ↕
[ item 1 ] --------- [ item 2 ] --------- [ item 3 ]
                                                       ← row-gap (vertical)
[ item 4 ] --------- [ item 5 ] --------- [ item 6 ]
```

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 10px;     /* vertical gap between rows */
  column-gap: 30px;  /* horizontal gap between columns */

  /* shorthand for the same thing: */
  gap: 10px 30px;    /* row-gap  column-gap */
}
```
![gap](/CSS/Grid/images/gap.png)

## CSS Grid — Cell Alignment

Every grid item sits inside a **cell**. By default it stretches to fill the whole cell. You can change that.

---

### Two Directions to Control

- **`justify`** = horizontal (left ↔ right)
- **`align`** = vertical (up ↕ down)

Easy trick to remember: **J**ustify = **J**ust left-right, **A**lign = **A**bove and below.

---

### On the Container (affects ALL items)

```css
.container {
  justify-items: start | center | end | stretch;  /* horizontal */
  align-items:   start | center | end | stretch;  /* vertical */
}
```

```
stretch (default)     center            start             end
┌──────────────┐     ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓│     │   [item]     │  │[item]        │  │        [item]│
│ ▓▓▓▓▓▓▓▓▓▓▓▓│     │              │  │              │  │              │
└──────────────┘     └──────────────┘  └──────────────┘  └──────────────┘
```

---

### Shorthand — Both at Once

```css
place-items: center;          /* center both vertically and horizontally */
place-items: start end;       /* align-items  justify-items */
```

---

### On a Single Item (overrides the container)

```css
.item {
  justify-self: center;   /* horizontal, this item only */
  align-self: end;        /* vertical, this item only */

  /* shorthand */
  place-self: center end; /* align-self  justify-self */
}
```

---

### Aligning the Whole Grid Inside the Container

This only matters when your grid is **smaller than the container**.

```css
.container {
  justify-content: center;        /* move whole grid horizontally */
  align-content: center;          /* move whole grid vertically */

  /* other values */
  justify-content: start | end | space-between | space-around | space-evenly;
  align-content:   start | end | space-between | space-around | space-evenly;
}
```

---

### Quick Reference

| Property | Applies to | Direction |
|---|---|---|
| `justify-items` | container → all items | horizontal |
| `align-items` | container → all items | vertical |
| `place-items` | container → all items | both |
| `justify-self` | single item | horizontal |
| `align-self` | single item | vertical |
| `place-self` | single item | both |
| `justify-content` | whole grid in container | horizontal |
| `align-content` | whole grid in container | vertical |

---

### Most Common Pattern

```css
/* perfectly center everything in the cell */
.container {
  display: grid;
  place-items: center;
}
```

![jusstify_items](/CSS/Grid/images/justify_items.png)
![judtify](/CSS/Grid/images/align_item.png)



## CSS Grid — `align-content` & `justify-content`

These control where the **whole grid** sits inside the container — only matters when the grid is **smaller than the container**.

---

### Think of it Like This

```
Without alignment:          With justify-content: center:

┌─────────────────────┐     ┌─────────────────────┐
│[1][2][3]            │     │     [1][2][3]        │
│[4][5][6]            │     │     [4][5][6]        │
│                     │     │                     │
└─────────────────────┘     └─────────────────────┘
  grid sits at start              grid is centered
```

---

### `justify-content` — moves grid **horizontally**

```css
.container {
  justify-content: start;         /* default, grid hugs left */
  justify-content: end;           /* grid hugs right */
  justify-content: center;        /* grid centered */
  justify-content: space-between; /* first and last touch edges, space in between */
  justify-content: space-around;  /* equal space around each column */
  justify-content: space-evenly;  /* perfectly equal space everywhere */
}
```

---

### `align-content` — moves grid **vertically**

```css
.container {
  align-content: start;           /* default, grid hugs top */
  align-content: end;             /* grid hugs bottom */
  align-content: center;          /* grid centered vertically */
  align-content: space-between;   /* first and last touch edges, space in between */
  align-content: space-around;    /* equal space around each row */
  align-content: space-evenly;    /* perfectly equal space everywhere */
}
```

---

### Visual — space values explained

```
space-between       space-around        space-evenly
┌───────────┐       ┌───────────┐       ┌───────────┐
│[row 1]    │       │           │       │           │
│           │       │  [row 1]  │       │  [row 1]  │
│           │       │           │       │           │
│[row 2]    │       │  [row 2]  │       │  [row 2]  │
│           │       │           │       │           │
│[row 3]    │       │  [row 3]  │       │  [row 3]  │
└───────────┘       └───────────┘       └───────────┘
no space at          half space          equal space
top/bottom           at edges            everywhere
```

---

### Shorthand — both at once

```css
place-content: center;              /* center both directions */
place-content: space-between start; /* align-content  justify-content */
```

---

### Important — container needs a set height

For `align-content` to work, the container must be taller than the grid:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px); /* grid is smaller than container */
  height: 400px;                           /* container has extra space */
  align-content: center;                   /* now this works */
}
```

---

### Quick Reference

| Property | Direction | Moves |
|---|---|---|
| `justify-content` | horizontal ↔ | whole grid left/right |
| `align-content` | vertical ↕ | whole grid up/down |
| `place-content` | both | shorthand for both |

![container_alignment](/CSS/Grid/images/container_alignment.png)
![items_vs._content](/CSS/Grid/images/items_vs._content.png)





# Visual Guide to CSS Grid Placement

CSS Grid Layout is a powerful tool, but placing items precisely requires understanding the distinction between grid **lines**, **tracks** and **areas**.

## Key Definitions

* **Grid Lines:** The horizontal and vertical dividing lines. They are numbered starting at 1. (e.g., Column Lines 1, 2, 3... Row Lines 1, 2, 3...)
* **Grid Tracks:** The space between two adjacent grid lines. These are your rows and columns.
* **Grid Cell:** The intersection of a row and a column. The smallest unit.
* **Grid Area:** A rectangular area made up of one or more grid cells.

---

## 1. Line-Based Placement (The Basics)

Use line numbers to define where an item starts and ends.

```css
.item-1 {
  /* Starts at Column Line 1, ends at Column Line 3 */
  grid-column-start: 1;
  grid-column-end: 3;

  /* Starts at Row Line 1, ends at Row Line 2 */
  grid-row-start: 1;
  grid-row-end: 2;
}

```

### Shorthand

You can combine start and end values using a forward slash (`/`).

```css
.item-2 {
  grid-column: 1 / 3; /* start line / end line */
  grid-row: 2 / 4;
}

```

---

## 2. Placing by Spanning

Instead of specifying the end line, you can specify how many *tracks* an item should span.

```css
.item-3 {
  grid-column: 2; /* start line */
  grid-row: 1 / span 2; /* span 2 row tracks */
}

```

---

## 3. Named Grid Areas (The Modern Way)

This is the most intuitive method for complex layouts. It involves two steps:

### Step 1: Define the layout template on the *container*.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

```

### Step 2: Assign grid items to the *names*.

```css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

```
![grid_items.png](/CSS/Grid/images/grid_items.png)
