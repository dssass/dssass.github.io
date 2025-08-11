# 台南美食地圖 (Tainan Food Map)

這是一個使用純 HTML 和 CSS 建立的台南美食清單網站。專為記錄與分享個人喜愛的台南美食店家而設計。

## 網站連結 (Live Site)

您可以直接透過以下網址瀏覽這個網站：

https://www.dssass.com

## 主要功能 (Features)

- **純靜態網頁**：使用基礎的 HTML 和 CSS，載入速度快。
- **固定側邊導覽**：左側有固定的分類目錄，方便在長長的頁面中快速跳轉。
- **Google 地圖連結**：點擊店家名稱即可直接開啟對應的 Google 地圖位置，方便尋找。

## 如何更新內容？

1.  直接在電腦上用 VS Code 編輯 `index.html` 檔案。
2.  編輯完成後，在 VS Code 的終端機中依序輸入以下指令即可更新網站：
    ```bash
    git add .
    git commit -m "Update food list"
    git push
    ```
 
從現在開始，您想編輯網站時：
打開任何一台電腦的瀏覽器，登入 GitHub。
進入專案，點擊 Code -> Codespaces，然後點擊您已經建立好的那個 Codespace (它會記住您的進度)。
雲端 VS Code 開啟後，在終端機輸入 bundle exec jekyll serve。
開始享受在 VS Code 裡編輯，並在另一個分頁即時預覽的開發體驗。
編輯完成後，使用 VS Code 左側的「原始檔控制」功能來提交 (Commit) 和推送 (Push) 您的變更，就像在本地端一樣。
