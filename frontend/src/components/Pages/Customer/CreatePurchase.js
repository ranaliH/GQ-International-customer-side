import React, { useEffect, useState } from "react";
import MainScreen from "../../modules/CustomerPageModules/Customer/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPurchaseAction } from "../../../actions/purchasesActions";
import Loading from "../../modules/CustomerPageModules/Customer/Loading";
import ErrorMessage from "../../modules/CustomerPageModules/Customer/ErrorMessage";
import { useHistory } from "react-router";
//import ReactMarkdown from "react-markdown";

function CreatePurchase() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const purchaseCreate = useSelector((state) => state.purchaseCreate);
  const { loading, error, purchase } = purchaseCreate;

  console.log(purchase);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(createPurchaseAction(title, content, category));

    resetHandler();
    history.push("/purchases");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="New Purchases">
      <Card>
        <Card.Header>Record a new purchase</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {/*{content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}*/}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <br />
            <Button type="submit" variant="primary">
              Store to purchased history
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          <center>Creating on - {new Date().toLocaleDateString()}</center>
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreatePurchase;
