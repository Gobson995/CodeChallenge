#include <bits/stdc++.h>

using namespace std;

int main () {
    string s; cin >> s;

    if (s[8] == 'P') {
        int numero = (s[0] - '0') * 10;

        numero += s[1] - '0';

        numero += 12;

        cout << numero;

        for (int i = 2; i < 8; i++) {
            cout << s[i];
        }
    } 
    else {
        int numero = (s[0] - '0') * 10;

        numero += s[1] - '0';

        if (numero == 12) {
            cout << "00";
            for (int i = 2; i < 8; i++) {
            cout << s[i];
            }
        }
        else {
            for (int i = 0; i < 8; i++) {
                cout << s[i];
            } 
        }
    }

    cout << endl;
}