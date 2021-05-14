import math
import time
import pygame, sys
from pygame.locals import *
import random
import tkinter as tk
import pandas as pd

#Applicaiton
app = {
    "name": "Ninja Spect",
    "version": 0.1,
    "author": "https://github.com/NinjaSpect"
    "strict_name": "ninjaspect"
}

pygame.init()
print("Welcome")
Screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Python Player")
Screen.fill((30,30,30))
while True:
    
    for event in pygame.event.get():
        if event.type == QUIT:             
            pygame.quit()              
            sys.exit()
        if event.type == KEYDOWN and event.key == K_ESCAPE:
            pygame.quit()
            sys.exit()
        
    pygame.display.update() 
