#include <iostream>

using namespace std;

int multiply(int x, int y) {
  return x * y;
}

int main()
{
    int n, m;
    cin>>n>>m;
    cout<<multiply(n, m)<<"\n";
    return 0;
}
