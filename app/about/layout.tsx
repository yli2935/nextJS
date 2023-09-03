/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-02 18:02:55
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-02 18:06:11
 * @FilePath: /share_prompts/app/about/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main>{children}</main>
    </>
  );
}
