import 'package:design_code/components/image_card.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: null,
      body: Center(
        child: ListView(
            scrollDirection: Axis.horizontal,
            shrinkWrap: true,
            children: [
              ImageCard(
                color: Colors.blueAccent,
              ),
              ImageCard(
                color: Colors.deepOrangeAccent,
              ),
              ImageCard(
                color: Colors.lightGreen,
              ),
            ]),
      ),
    );
  }
}
