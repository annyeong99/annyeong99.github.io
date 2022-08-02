import 'package:flutter/material.dart';
import 'main_screen.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'INFO KEBUMEN',
      theme: ThemeData(
          primarySwatch: Colors.green,
          canvasColor: Color.fromARGB(255, 186, 231, 143),
          visualDensity: VisualDensity.adaptivePlatformDensity),
      home: const MainScreen(),
    );
  }
}
