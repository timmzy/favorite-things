from cryptography.fernet import Fernet

key = 'TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM='

# Oh no! The code is going over the edge! What are you going to do?
message = b'gAAAAABc-VooIh9EOATJGHFpvmz3T2txtX-ptbF5-23ocArt9YhOMV1ekOI1VO6lCSz0WhYibZZr461UlJomTtsniZiEGezKfpiGng6O7YbuE02dPw8o2bxgDqS9b7YvCOVjLgBhd7oVC58HeLOMtoDbemfCHSCOMSjE-a8UnFjELtMWG-_oess='

def main():
    f = Fernet(key)
    print(f.decrypt(message))


if __name__ == "__main__":
    main()