import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _scaffoldKey = new GlobalKey<ScaffoldState>();

  bool isLoading = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: _appBar(),
      body: isLoading ? Center(
        child: CircularProgressIndicator(
          strokeWidth: 2,
          backgroundColor: Color(0xFFFF6759),
        ),
      ) : _bodyContent(),
    );
  }

  Widget _appBar() {
    return AppBar(
      title: Text('Motoristas'),
      leading: IconButton(
        icon: Icon(Icons.menu),
        onPressed: () => {},
      ),
      actions: <Widget>[
        IconButton(
          tooltip: 'Novo Motorista',
          icon: Icon(Icons.add),
          onPressed: () {
            // showSearch(
            //   context: context,
            //   delegate: CustomSearchDelegate()
            // );
          },
        ),
      ],
    );
  }

  Widget _bodyContent() {
    return Container();
  }
}