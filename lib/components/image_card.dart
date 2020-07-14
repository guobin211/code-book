import 'package:flutter/material.dart';

class ImageCard extends StatefulWidget {
  final Color color;
  ImageCard({this.color});

  @override
  _ImageCardState createState() => _ImageCardState();
}

class _ImageCardState extends State<ImageCard> {

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: widget.color,
            borderRadius: BorderRadius.circular(16.0),
            boxShadow: [
              BoxShadow(
                color: Colors.black12,
                offset: Offset(8.0, 10.0),
                blurRadius: 25.0,
              )
            ],
          ),
        ),
      ),
    );
  }
}
