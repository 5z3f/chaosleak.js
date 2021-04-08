__author__          = 'agsvn'

special_characters = ['*', '?', '$', '\\', '/', '<', '>', '"', ':', '|', '!', '.', '#', '%', '[', ']', '(', ')', '{', '}']
passwords = open('lastchaos.txt').read().splitlines()
password_count = len(passwords)

for idx, password in enumerate(passwords):
    print("%s/%s | %s" % (str(idx), str(password_count), password))

    with open("lastchaos/%s.txt" % (password[0] if password[0] not in special_characters else "special"), "a+") as f:
        f.write("%s\n" % password)
