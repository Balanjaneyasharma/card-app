# 🃏 CardApp

A sleek Angular application that displays a list of cards fetched from a mock API. Users can dynamically add or remove cards with smooth animations and responsive layout.

---

## 🔧 Features

- 📦 Fetches data from [MockAPI.io](https://mockapi.io/)
- 🃏 Displays data as visually styled cards
- ➕ Add new cards on-the-fly
- ❌ Delete individual cards with animations
- 👆 Delete icon appears on hover to reduce visual clutter
- 🔄 UI reflows with smooth transitions
- 🎨 Built using Angular 18 and SCSS

---

## 💡 Design Choice: Delete Icon on Hover

To maintain a clean and minimal user interface, the delete icon is hidden by default and only appears when a user hovers over a card.

**Why this approach?**
- ✨ Keeps the card layout visually clean
- 🛑 Prevents accidental deletions
- 🧭 Keeps focus on the card content
- 📱 Follows modern UX patterns seen in many web apps

---

## 📦 Tech Stack

- **Framework**: Angular 18
- **Language**: TypeScript
- **Styling**: SCSS
- **Animations**: Angular Animations
- **Mock API**: [mockapi.io](https://mockapi.io/)

---

## 🖼️ Preview

The application UI looks like this:

<img width="1898" height="920" alt="image" src="https://github.com/user-attachments/assets/d6064af2-2591-40e6-bab3-dd5a03f2af90" />


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/card-app.git
cd card-app
```

### 2.Install Dependencies
```
npm i
```
## 3.Start the Development Server

Run 
```
ng serve -o 
```
 Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

