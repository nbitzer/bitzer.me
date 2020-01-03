#!/usr/bin/env python

# imports
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Set URL for selenium
URL = 'http://www.bitzer.me/about'

def main():
  """ Test form fields and submission """
  driver = webdriver.Firefox()
  driver.get(URL)
  # Find the 1st form field
  form_name_elem = driver.find_element_by_name('name')
  # Enter a name into the form field
  form_name_elem.send_keys('Nick Bitzer')


if __name__ == '__main__':
  main()
