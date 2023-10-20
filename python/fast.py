import win32com.client
import pyautogui
import time
import pyperclip
# 创建Excel应用程序对象

import sys

userInput = sys.argv

input1 = userInput[1]
input2 = userInput[2]
input3 = userInput[3]

print(input1)
print(input2)
print(input3)
# excel = win32com.client.Dispatch("Excel.Application")

# # 打开工作簿
# workbook = excel.Workbooks.Open(r'C:\Users\jeremydu\Desktop\UserData.xls')

# # 获取工作表
# sheet = workbook.Sheets("UserData")

# # 读取单元格值
# # value = sheet.Cells(1, 1).Value
# accountAndPassword = input("輸入以作為帳號及密碼__ ")
# name = input("輸入姓名__")
# ifdelete= input("是否執行刪除")


# sheet.Cells(2, 1).Value = accountAndPassword
# sheet.Cells(2, 2).Value = accountAndPassword
# sheet.Cells(2, 3).Value = name
# # 保存工作簿并关闭Excel
# workbook.Save()
# excel.Quit()
# # ifdelete="1"

# pyautogui.hotkey('win', 'd')
# pyautogui.moveTo(1540, 20) ###轉換的檔案擺在右上角
# pyautogui.click()
# pyautogui.hotkey('ctrl', 'c')
# pyautogui.moveTo(420, 940) #遠端在下面數來第1個
# pyautogui.click()
# pyautogui.moveTo(120,280) #portal位置
# pyautogui.doubleClick()


# ######remote視窗操作######
# time.sleep(2)

# ##移動到叉叉位置關閉多餘視窗
# pyautogui.moveTo(1582,104)
# for i in range(5):
#  pyautogui.click()

# ##刪除操作(遠端桌面已經有檔案的時候執行此部分程式碼)
# if ifdelete =="1":
#  pyautogui.moveTo(1000,600)
#  pyautogui.rightClick() 
#  pyautogui.moveTo(1050,525)
#  pyautogui.click()
#  pyautogui.moveTo(1050,530)
#  pyautogui.click()

# ###貼上操作
# pyautogui.moveTo(1000,600)
# time.sleep(1)
# pyautogui.rightClick()
# time.sleep(1) 
# pyautogui.moveTo(1050,460)
# pyautogui.click()

# ###移動到ie的位置
# pyautogui.moveTo(565,810)
# pyautogui.click()
# time.sleep(1)##開啟瀏覽器延遲
# pyautogui.moveTo(565,170)
# pyautogui.click()
# pyautogui.moveTo(565,480)
# pyautogui.click()

# time.sleep(1) 

# ###進入上傳頁面
# pyautogui.moveTo(620,280)
# pyautogui.click()
# fileName='UserData.xls'
# pyperclip.copy(fileName)
# pyautogui.moveTo(620,520)
# pyautogui.click()
# pyautogui.rightClick()
# pyautogui.moveTo(650,300)
# pyautogui.click()
# pyautogui.moveTo(750,550)
# pyautogui.click()
# pyautogui.moveTo(385,365)