/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-02 17:27:00
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-02 17:39:47
 * @FilePath: /share_prompts/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hello World</h1>
    </main>
  )
}
