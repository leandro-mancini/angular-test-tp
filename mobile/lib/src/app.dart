import 'package:flutter/material.dart';

import 'screens/login/login_view.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Truckpad',
    debugShowCheckedModeBanner: false,
    theme: ThemeData(
      primaryColor: Colors.indigo,
      primarySwatch: Colors.blue,
    ),
    home: LoginPage(),
  );
}