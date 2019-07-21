import 'package:flutter/material.dart';
import 'package:truckpad/src/screens/home/home_view.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _scaffoldKey = new GlobalKey<ScaffoldState>();
  final _formKey = new GlobalKey<FormState>();

  bool _isLoading = false;
  bool _passwordVisible = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      body: _bodyContent(),
    );
  }

  Widget _bodyContent() {
    return Center(
      heightFactor: double.infinity,
      child: SingleChildScrollView(
        padding: EdgeInsets.only(
          top: 30,
          bottom: 30,
        ),
        child: Center(
          child: _loginForm(),
        )
      ),
    );
  }

  Widget _loginForm() {
    return Form(
      key: this._formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
            padding: EdgeInsets.only(
              left: 30,
              right: 30,
              bottom: 15
            ),
            width: double.infinity,
            child: Text(
              'Entrar',
              textAlign: TextAlign.left,
              style: TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.bold
              ),
            ),
          ),
          _usernameFormControl('Usuário', TextInputType.text),
          SizedBox(
            height: 20,
          ),
          _senhaFormControl('Senha', TextInputType.text),
          SizedBox(
            height: 40,
          ),
          _formButton()
        ],
      ),
    );
  }

  Widget _usernameFormControl(String _labelText, TextInputType _type) {
    return Container(
      padding: EdgeInsets.only(
        left: 30,
        right: 30
      ),
      child: TextFormField(
        keyboardType: _type,
        decoration: InputDecoration(
          contentPadding: new EdgeInsets.symmetric(vertical: 15, horizontal: 10.0),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Color(0xFFFF6759),
              width: 2,
            )
          ),
          border: OutlineInputBorder(),
          labelText: _labelText,
          labelStyle: TextStyle(
            color: Colors.black38,
            fontWeight: FontWeight.w400,
            fontSize: 16,
          ),
        ),
        style: TextStyle(
          fontSize: 20,
        ),
        // validator: validation.validateField,
        // onSaved: (String value) {
        //   username = value;
        // }
      ),
    );
  }

  Widget _senhaFormControl(String _labelText, TextInputType _type) {
    return Container(
      padding: EdgeInsets.only(
        left: 30,
        right: 30
      ),
      child: TextFormField(
        keyboardType: _type,
        obscureText: _passwordVisible,
        decoration: InputDecoration(
          contentPadding: new EdgeInsets.symmetric(vertical: 15, horizontal: 10.0),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Color(0xFFFF6759),
              width: 2,
            )
          ),
          border: OutlineInputBorder(),
          labelText: _labelText,
          labelStyle: TextStyle(
            color: Colors.black38,
            fontWeight: FontWeight.w400,
            fontSize: 16,
          ),
          suffixIcon: IconButton(
            icon: Icon(
              _passwordVisible
              ? Icons.visibility
              : Icons.visibility_off,
              color: Colors.black38,
            ),
            onPressed: () {
              setState(() {
                _passwordVisible = !_passwordVisible;  
              });
            },
          ),
        ),
        style: TextStyle(
          fontSize: 20,
        ),
        // validator: validation.validateField,
        // onSaved: (String value) {
        //   password = value;
        // }
      ),
    );
  }

  Widget _formButton() {
    return Container(
      width: _isLoading ? 100 : double.infinity,
      margin: EdgeInsets.only(
        left: 30,
        right: 30,
      ),
      height: 40,
      child: RaisedButton(
        color: Colors.indigo,
        padding: EdgeInsets.only(
          left: 30,
          right: 30,
        ),
        shape: new RoundedRectangleBorder(borderRadius: new BorderRadius.circular(4)),
        child: _isLoading ? SizedBox(
          height: 20,
          width: 20,
          child: CircularProgressIndicator(
            strokeWidth: 2,
            backgroundColor: Colors.white,
          ),
        ) : Text(
          'ENTRAR',
          style: TextStyle(
            color: Colors.white,
            fontSize: 14,
          ),
        ),
        onPressed: () => _isLoading ? null : login(),
      ),
    );
  }

  Future login() async {
    if (_formKey.currentState.validate()) {
      _formKey.currentState.save();

      // setState(() {
      //   this._isLoading = true;
      // });

      Navigator.push(
        context, 
        MaterialPageRoute(
          builder: (context) => HomePage(),
        )
      );
    }
  }
}