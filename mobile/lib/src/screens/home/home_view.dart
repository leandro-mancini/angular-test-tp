import 'package:flutter/material.dart';

class Constants{
  static const String EditItem = 'Editar';
  static const String EnableItem = 'Inativar';

  static const List<String> choices = <String>[
    EditItem,
    EnableItem
  ];
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _scaffoldKey = new GlobalKey<ScaffoldState>();

  bool isLoading = false;

  void choiceAction(String choice) {
    if (choice == Constants.EditItem) {
      print('Editar Item');
    } else if (choice == Constants.EnableItem) {
      print('Inativar Item');
    }
  }

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
    return Container(
      child: ListView.builder(
        padding: EdgeInsets.only(
          top: 16,
          bottom: 16
        ),
        itemCount: 10,
        itemBuilder: (BuildContext context, int index) {
          return _getRow(index);
        },
      ),
    );
  }

  Widget _getRow(int index) {
    return Card(
      margin: EdgeInsets.only(
        left: 16,
        right: 16,
        bottom: 1
      ),
      shape: index == 0 ? RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          topLeft: const Radius.circular(16),
          topRight: const Radius.circular(16)
        ),
      ) : index == 9 ? RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: const Radius.circular(16),
          bottomRight: const Radius.circular(16)
        ),
      ) : RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(0),
      ),
      child: _content(),
    );
  }

  Widget _content() {
    return Container(
      child: _contentRegistro(),
    );
  }

  Widget _contentRegistro() {
    return Container(
      child: ListTile(
        contentPadding: EdgeInsets.only(
          left: 16,
          top: 16
        ),
        trailing: PopupMenuButton<String>(
          onSelected: choiceAction,
          itemBuilder: (BuildContext context) {
            return Constants.choices.map((String choice) {
              return PopupMenuItem<String>(
                value: choice,
                child: Text(choice),
              );
            }).toList();
          },
        ),
        title: Container(
          padding: EdgeInsets.only(
            bottom: 16
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Container(
                child: Text(
                  'Leandro Mancini'.toUpperCase(),
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF292E33),
                  ),
                ),
              ),
              Container(
                margin: EdgeInsets.only(bottom: 4, top: 4),
                child: Text(
                  'Data de Nasc. 06/05/1988',
                  style: TextStyle(
                    fontSize: 14,
                    color: Color(0xFF585859)
                  ),
                ),
              ),
              Container(
                margin: EdgeInsets.only(bottom: 4, top: 4),
                child: Text(
                  'Telefone. 11960634918',
                  style: TextStyle(
                    fontSize: 14,
                    color: Color(0xFF585859)
                  ),
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  Container(
                    child: Text(
                      'Documento:',
                      style: TextStyle(
                        fontSize: 14,
                        color: Color(0xFF585859)
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Row(
                    textDirection: TextDirection.ltr,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Column(
                        textDirection: TextDirection.ltr,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(
                            'CNH',
                            style: TextStyle(
                              fontWeight: FontWeight.bold
                            ),
                          ),
                          Text('35637425884 / AB')
                        ],
                      ),
                      Column(
                        textDirection: TextDirection.ltr,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text(
                            'CPF',
                            style: TextStyle(
                              fontWeight: FontWeight.bold
                            ),
                          ),
                          Text('35637425884')
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ],
          )
        ),
      ),
    );
  }
}