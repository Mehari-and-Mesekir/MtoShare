import os
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
#from form import Todo
import pymysql
import secret

conn="mysql+pymysql://{0}:{1}@{2}/{3}".format(secret.dbuser,secret.dbpass,secret.dbhost,secret.dbname)


app = Flask(__name__)
app.config['SECRET_KEY']='password'
app.config['SQLALCHEMY_DATABASE_URI']=conn
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db=SQLAlchemy(app)

class User(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    FullName=db.Column(db.String(60))
    email=db.Column(db.String(255))
    phone_number=db.Column(db.Integer)
    def __str__(slef):
      return f'{self.content},{self.id}'
class Videos (db.Model):
    id=db.Column(db.Integer,primary_key=True)
    #videoType=db.Column(db.String(30))
    uploadedBy=db.Column(db.String(255))
    #videoUrl=db.Column(db.String(255))
    view=db.Column(db.String(255))
    video= db.Column(db.LargeBinary)
    
class Article(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    articleType=db.Column(db.String(255))
    postedBy=db.Column(db.String(60))
    #view=db.Column(db.Integer)
    #articleUrl=db.Column(db.String(255))
@app.route('/user',methods=["GET","POST"])
def user():
    if  request.method=='POST':
      email=request.form['email']
      FullName=request.form['firstName']
      #firstName=request.form['firstName']
      #lastName=request.form['lastNmae']
      #email=request.form['email']
      phoneNumber=request.form['phoneNumber']
      #email=request.form['email']
      #password=request.form['password']
      user=User(FullName=FullName,email=email,phoneNumber=phoneNumber)
      db.session.add(user)
      db.session.commit()
      return redirect('/',"success")
    elif  request.method=='GET':
      user=User()
      user_data=user.query.all()
      return render_template("user.html",user_data=user_data)
    #return render_template('todo.html',form=Todo_form)
@app.route('/video',methods=["GET","POST"])
def video():
    if  request.method=='POST':
      #videoType=request.form['videoType']
      uploadedBy=request.form['uploadedBy']
      #videoUrl=request.form['videoUrl']
      view=request.form['view']
      video_content=request.form["video"]
 
      videos=Videos(uploadedBy=uploadedBy,video_content=video_content,
      	 view=view)
      db.session.add(videos)
      db.session.commit()
      return redirect('/',"success")
    elif  request.method=='GET':
      video=Video()
      video_data=user.query.all()
      return render_template("video.html",video_data=video_data)
    #return render_template('todo.html',form=Todo_form)
@app.route('/article',methods=["GET","POST"])
def article():
    if  request.method=='POST':
      #articleType=request.form['articleType']
      postedBy=request.form['postedBy']
      view=request.form['view']
      article=request.form['article']
      article=Article(articleType=articleType,postedBy=postedBy,view=view,articleUrl=articleUrl)
      db.session.add(article)
      db.session.commit()
      return redirect('/',"success")
    elif  request.method=='GET':
      article=Article()
      article_data=article.query.all()
      return render_template("article.html",user_data=article_data)
    #return render_template('article.html',form=Todo_form)
    

if __name__=='__main__':
	app.run(debug=True)
