__author__          = 'agsvn'

from hashlib import md5

passwords = open('plain-to-md5.txt').read().splitlines()
password_count = len(passwords)

for idx, password in enumerate(passwords):
    hashed = md5(password.encode('utf-8')).hexdigest()
    print("%s/%s | %s >> %s" % (str(idx), str(password_count), password, hashed))

    with open("md5-from-plain.txt", "a+") as f:
        f.write("%s\n" % hashed)
