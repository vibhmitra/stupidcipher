
/* Ceasor Cipher */

#include <iostream>
#include <cstdio>
#include <string>
using namespace std;

int calcstrlen(string str) {
	int space = 0;
	int length = str.size();
	for(int i = 0; i < length; ++i) {
		if(isspace(str[i]))
			space++;	
	}
	return (length-space);
}

int wordcount(string str) {
	return (str.size() - calcstrlen(str) + 1);
}

int main() {
	string planetext;
	cout << "Enter String >> " ;
	getline(cin , planetext);
	cout << "String length of \""<< planetext << "\" is " << calcstrlen(planetext) << endl;
	cout << "And Has " << wordcount(planetext) << " Words in total" << endl;
	return 0;
}