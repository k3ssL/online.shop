import { diskStorage } from "multer"
import { extname } from "path"

const generateId = () =>
    Array(18)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join("")

const normalizeFileName = (
    req: any,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void,
) => {
    const fileExtName = extname(file.originalname)
    callback(null, `${generateId()}${fileExtName}`)
}

export const fileStorage = diskStorage({
    destination: "src/static",
    filename: normalizeFileName,
})
