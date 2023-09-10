import { prompts } from "../promptsStock";

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * prompts.length)
    const randomPrompt = prompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  }